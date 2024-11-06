import { Customer } from "../models/CustomerModels";
import { ICustomer } from "../interfaces/ICustomer";
import { NotFoundError, DuplicateEmailError } from "../errors/ApiError";

// Create a customer
export const createCustomer = async (customerData: ICustomer) => {
  const existingCustomer = await Customer.findOne({ email: customerData.email });
  if (existingCustomer) {
    const error = new Error("Email already exists");
    error.name = "DuplicateEmailError";
    throw error;
  }
  const customer = new Customer(customerData);
  return await customer.save();
};

// Get customer by ID
export const getCustomerById = async (customerId: string) => {
  return await Customer.findById(customerId);
};

// Update customer
export const updateCustomer = async (customerId: string, customerData: any) => {
  const { email } = customerData;

  // Check if the email is already used by another customer
  if (email) {
    const existingCustomerWithEmail = await Customer.findOne({ email });
    if (existingCustomerWithEmail && (existingCustomerWithEmail as any)._id.toString() !== customerId) {
      throw new DuplicateEmailError();
    }
  }

  // Proceed to update the customer
  const updatedCustomer = await Customer.findByIdAndUpdate(
    customerId,
    customerData,
    { new: true, runValidators: true }
  );

  if (!updatedCustomer) {
    throw new NotFoundError('Customer not found');
  }

  return updatedCustomer;
};

// Delete customer
export const deleteCustomer = async (customerId: string) => {
  return await Customer.findByIdAndDelete(customerId);
};

// Get all customers
export const getAllCustomers = async () => {
  return await Customer.find();
};

export default {
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  getAllCustomers,
};

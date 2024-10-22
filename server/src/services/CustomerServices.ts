import { Customer } from "../models/CustomerModels";
import { ICustomer } from "../interfaces/ICustomer";

// Create a customer
export const createCustomer = async (customerData: ICustomer) => {
  const customer = new Customer(customerData);
  return await customer.save();
};

// Get customer by ID
export const getCustomerById = async (customerId: string) => {
  return await Customer.findById(customerId);
};

// Update customer
export const updateCustomer = async (customerId: string, customerData: Partial<ICustomer>) => {
  return await Customer.findByIdAndUpdate(customerId, customerData, { new: true });
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

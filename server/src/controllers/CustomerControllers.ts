import { NextFunction, Request, Response } from "express";
import customerService from "../services/CustomerServices";
import { NotFoundError } from "../errors/ApiError";
import { ICustomer } from "../interfaces/ICustomer";

// Create Customer Controller
export const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const customerData = req.body;

  try {
    const newCustomer = await customerService.createCustomer(customerData);
    res.status(201).json(newCustomer);
  } catch (error: any) {
    if (error.name === "DuplicateEmailError") {  // Check if the error is a duplicate email error
      res.status(400).json({ message: error.message });
    } else {
      next(error);
    }
  }
};

// Get Customer Details Controller
export const getCustomerDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { customerId } = req.params;

  try {
    const customer = await customerService.getCustomerById(customerId);
    if (!customer) {
      throw new NotFoundError("Customer not found");
    }
    res.json(customer);
  } catch (error) {
    next(error);
  }
};

// Update Customer Controller
export const updateCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { customerId } = req.params;
  const customerData = req.body;

  try {
    const updatedCustomer = await customerService.updateCustomer(customerId, customerData);
    if (!updatedCustomer) {
      throw new NotFoundError("Customer not found");
    }
    res.json(updatedCustomer);
  } catch (error) {
    next(error);
  }
};

// Delete Customer Controller
export const deleteCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { customerId } = req.params;

  try {
    const deletedCustomer = await customerService.deleteCustomer(customerId);
    if (!deletedCustomer) {
      throw new NotFoundError("Customer not found");
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

// Get All Customers Controller
export const getAllCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.json(customers);
  } catch (error) {
    next(error);
  }
};

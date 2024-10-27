import { NextFunction, Request, Response } from "express";
import paymentService from "../services/PaymentServices";
import { NotFoundError } from "../errors/ApiError";

// Create Payment Controller
export const createPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const paymentData = req.body;

  try {
    const newPayment = await paymentService.createPayment(paymentData);
    res.status(201).json(newPayment);
  } catch (error) {
    next(error);
  }
};

// Get Payment Details Controller
export const getPaymentDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { paymentId } = req.params;

  try {
    const payment = await paymentService.getPaymentById(paymentId);
    if (!payment) {
      throw new NotFoundError("Payment not found");
    }
    res.json(payment);
  } catch (error) {
    next(error);
  }
};

// Update Payment Controller
export const updatePayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { paymentId } = req.params;
  const paymentData = req.body;

  try {
    const updatedPayment = await paymentService.updatePayment(paymentId, paymentData);
    if (!updatedPayment) {
      throw new NotFoundError("Payment not found");
    }
    res.json(updatedPayment);
  } catch (error) {
    next(error);
  }
};

// Delete Payment Controller
export const deletePayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { paymentId } = req.params;

  try {
    const deletedPayment = await paymentService.deletePayment(paymentId);
    if (!deletedPayment) {
      throw new NotFoundError("Payment not found");
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

// Get All Payments Controller
export const getAllPayments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payments = await paymentService.getAllPayments();
    res.json(payments);
  } catch (error) {
    next(error);
  }
};

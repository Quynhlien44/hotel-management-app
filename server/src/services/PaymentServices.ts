import { Payment } from "../models/PaymentModels";
import { IPayment } from "../interfaces/IPayment";

// Create a payment
export const createPayment = async (paymentData: IPayment) => {
  const payment = new Payment(paymentData);
  return await payment.save();
};

// Get payment by ID
export const getPaymentById = async (paymentId: string) => {
  return await Payment.findById(paymentId);
};

// Update payment
export const updatePayment = async (paymentId: string, paymentData: Partial<IPayment>) => {
  return await Payment.findByIdAndUpdate(paymentId, paymentData, { new: true });
};

// Delete payment
export const deletePayment = async (paymentId: string) => {
  return await Payment.findByIdAndDelete(paymentId);
};

// Get all payments
export const getAllPayments = async () => {
  return await Payment.find();
};

export default {
  createPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
  getAllPayments,
};

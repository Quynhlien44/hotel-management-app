import { Document } from "mongoose";
import { PaymentStatus } from '../enums/PaymentEnum';

export interface IPayment extends Document {
  reservationId: string;
  amount: number;
  status: PaymentStatus;
  
  getPaymentDetails(): PaymentDetails;
}

export interface PaymentDetails {
  reservationId: string;
  amount: number;
  status: PaymentStatus;
}

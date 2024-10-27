import { Schema, model } from 'mongoose';
import { IPayment } from '../interfaces/IPayment';
import { PaymentStatus } from '../enums/PaymentEnum';

// Define the Payment schema
const PaymentSchema = new Schema<IPayment>({
  reservationId: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: PaymentStatus, default: PaymentStatus.PENDING },
});

// Add method to get payment details
PaymentSchema.methods.getPaymentDetails = function() {
  return {
    reservationId: this.reservationId,
    amount: this.amount,
    status: this.status,
  };
};

export const Payment = model<IPayment>('Payment', PaymentSchema);

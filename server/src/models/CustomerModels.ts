import { Schema, model } from 'mongoose';
import { ICustomer } from '../interfaces/ICustomer';
import { UserType } from '../enums/CustomerEnum';

// Define the Customer schema
const CustomerSchema = new Schema<ICustomer>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  status: { type: String, enum: Object.values(UserType), default: UserType.NORMAL },
});

// Add method to get customer details
CustomerSchema.methods.getCustomerDetails = function() {
  return {
    name: this.name,
    email: this.email,
    phoneNumber: this.phoneNumber,
    status: this.status,
  };
};

export const Customer = model<ICustomer>('Customer', CustomerSchema);

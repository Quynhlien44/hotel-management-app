import { Document } from "mongoose";
import { UserType } from '../enums/CustomerEnum';

export interface ICustomer extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  status: UserType;

  getCustomerDetails(): CustomerDetails;
}

export interface CustomerDetails {
  name: string;
  email: string;
  phoneNumber: string;
  status: UserType;
}

import { Document } from "mongoose";
import { StaffRoles} from '../enums/StaffEnum';

export interface IStaff extends Document {
  name: string;
  role: StaffRoles;
  email: string;
  
  getStaffDetails(): StaffDetails;
}

export interface StaffDetails {
  name: string;
  role: StaffRoles;
  email: string;
}

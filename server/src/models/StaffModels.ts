import { Schema, model } from 'mongoose';
import { IStaff } from '../interfaces/IStaff';
import { StaffRoles } from '../enums/StaffEnum';

// Define the Staff schema
const StaffSchema = new Schema<IStaff>({
  name: { type: String, required: true },
  role: { type: String, enum: StaffRoles, required: true },
  email: { type: String, required: true, unique: true },
});

// Add method to get staff details
StaffSchema.methods.getStaffDetails = function() {
  return {
    name: this.name,
    role: this.role,
    email: this.email,
  };
};

export const Staff = model<IStaff>('Staff', StaffSchema);

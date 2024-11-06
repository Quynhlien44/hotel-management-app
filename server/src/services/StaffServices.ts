import { Staff } from "../models/StaffModels";
import { IStaff } from "../interfaces/IStaff";

// Create a staff member
export const createStaff = async (staffData: IStaff) => {
  const staff = new Staff(staffData);
  return await staff.save();
};

// Get staff by ID
export const getStaffById = async (staffId: string) => {
  return await Staff.findById(staffId);
};

// Update staff
export const updateStaff = async (staffId: string, staffData: any) => {
  return await Staff.findByIdAndUpdate(staffId, staffData, { new: true });
};

// Delete staff
export const deleteStaff = async (staffId: string) => {
  return await Staff.findByIdAndDelete(staffId);
};

// Get all staff
export const getAllStaff = async () => {
  return await Staff.find();
};

export default {
  createStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
  getAllStaff,
};

import { NextFunction, Request, Response } from "express";
import staffService from "../services/StaffServices";
import { NotFoundError } from "../errors/ApiError";

// Create Staff Controller
export const createStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const staffData = req.body;

  try {
    const newStaff = await staffService.createStaff(staffData);
    res.status(201).json(newStaff);
  } catch (error) {
    next(error);
  }
};

// Get Staff Details Controller
export const getStaffDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { staffId } = req.params;

  try {
    const staff = await staffService.getStaffById(staffId);
    if (!staff) {
      throw new NotFoundError("Staff not found");
    }
    res.json(staff);
  } catch (error) {
    next(error);
  }
};

// Update Staff Controller
export const updateStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { staffId } = req.params;
  const staffData = req.body;

  try {
    const updatedStaff = await staffService.updateStaff(staffId, staffData);
    if (!updatedStaff) {
      throw new NotFoundError("Staff not found");
    }
    res.json(updatedStaff);
  } catch (error) {
    next(error);
  }
};

// Delete Staff Controller
export const deleteStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { staffId } = req.params;

  try {
    const deletedStaff = await staffService.deleteStaff(staffId);
    if (!deletedStaff) {
      throw new NotFoundError("Staff not found");
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

// Get All Staff Controller
export const getAllStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const staff = await staffService.getAllStaff();
    res.json(staff);
  } catch (error) {
    next(error);
  }
};

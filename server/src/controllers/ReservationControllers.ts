import { NextFunction, Request, Response } from "express";
import reservationService from "../services/ReservationServices";
import { NotFoundError } from "../errors/ApiError";

// Create Reservation Controller
export const createReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reservationData = req.body;

  try {
    const newReservation = await reservationService.createReservation(reservationData);
    res.status(201).json(newReservation);
  } catch (error) {
    next(error);
  }
};

// Get Reservation Details Controller
export const getReservationDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { reservationId } = req.params;

  try {
    const reservation = await reservationService.getReservationById(reservationId);
    if (!reservation) {
      throw new NotFoundError("Reservation not found");
    }
    res.json(reservation);
  } catch (error) {
    next(error);
  }
};

// Get All Reservations Controller
export const getAllReservations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reservations = await reservationService.getAllReservations();
    res.json(reservations);  // Return all reservations
  } catch (error) {
    console.error("Error fetching all reservations:", error);
    next(error);  // Pass any error to the next error handler
  }
};

// Update Reservation Controller
export const updateReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { reservationId } = req.params;
  const reservationData = req.body;

  try {
    const updatedReservation = await reservationService.updateReservation(reservationId, reservationData);
    if (!updatedReservation) {
      throw new NotFoundError("Reservation not found");
    }
    res.json(updatedReservation);
  } catch (error) {
    next(error);
  }
};

// Delete Reservation Controller
export const deleteReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { reservationId } = req.params;

  try {
    const deletedReservation = await reservationService.deleteReservation(reservationId);
    if (!deletedReservation) {
      throw new NotFoundError("Reservation not found");
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};



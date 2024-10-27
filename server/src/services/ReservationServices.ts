import { Reservation } from "../models/ReservationModels";
import { IReservation } from "../interfaces/IReservation";

// Create a reservation
export const createReservation = async (reservationData: IReservation) => {
  const reservation = new Reservation(reservationData);
  return await reservation.save();
};

// Get reservation by ID
export const getReservationById = async (reservationId: string) => {
    return await Reservation.findById(reservationId);
};

// Update reservation
export const updateReservation = async (reservationId: string, reservationData: Partial<IReservation>) => {
  return await Reservation.findByIdAndUpdate(reservationId, reservationData, { new: true });
};

// Delete reservation
export const deleteReservation = async (reservationId: string) => {
  return await Reservation.findByIdAndDelete(reservationId);
};

// Get all reservations
export const getAllReservations = async () => {
  return await Reservation.find();
};

export default {
  createReservation,
  getReservationById,
  updateReservation,
  deleteReservation,
  getAllReservations,
};

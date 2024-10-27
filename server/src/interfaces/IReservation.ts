import { Document } from "mongoose";
import { ReservationStatus } from '../enums/ReservationEnum';

export interface IReservation extends Document {
  customerId: string;
  roomId: string;
  startDate: Date;
  endDate: Date;
  status: ReservationStatus;

  getReservationDetails(): ReservationDetails;
}

export interface ReservationDetails {
  customerId: string;
  roomId: string;
  startDate: Date;
  endDate: Date;
  status: ReservationStatus;
}

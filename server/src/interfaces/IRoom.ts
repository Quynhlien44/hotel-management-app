import { Document } from "mongoose";
import { RoomTypes, RoomStatus } from '../enums/RoomEnums';

export interface IRoom extends Document {
  roomNumber: number;
  roomType: RoomTypes;
  status: RoomStatus;
  pricePerNight: number;
  
  updateStatus(newStatus: RoomStatus): void;
  getRoomDetails(): RoomDetails;
}

export interface RoomDetails {
  roomNumber: number;
  roomType: RoomTypes;
  status: RoomStatus;
  pricePerNight: number;
}

import { Room } from "../models/RoomModels";
import { IRoom } from "../interfaces/IRoom";

// Create a room
export const createRoom = async (roomData: IRoom) => {
  const room = new Room(roomData);
  return await room.save();
};

// Get room by ID
export const getRoomById = async (roomId: string) => {
  return await Room.findById(roomId);
};

// Update room
export const updateRoom = async (roomId: string, roomData: Partial<IRoom>) => {
  return await Room.findByIdAndUpdate(roomId, roomData, { new: true });
};

// Delete room
export const deleteRoom = async (roomId: string) => {
  return await Room.findByIdAndDelete(roomId);
};

// Get all rooms
export const getAllRooms = async () => {
  return await Room.find();
};

export default {
  createRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
  getAllRooms,
};

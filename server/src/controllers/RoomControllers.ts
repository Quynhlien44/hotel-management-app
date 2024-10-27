import { Request, Response, NextFunction } from 'express';
import * as RoomService from '../services/RoomServices';
import { NotFoundError } from '../errors/ApiError';
import { IRoom } from "../interfaces/IRoom";

const roomService = RoomService;
// Create Room Controller
export const createRoom = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const roomData = req.body;
  
    try {
      const newRoom = await roomService.createRoom(roomData);
      res.status(201).json(newRoom);
    } catch (error) {
      next(error);
    }
  };
  
  // Get Room Details Controller
  export const getRoomDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
  
    try {
      const room = await roomService.getRoomById(id);
      if (!room) {
        throw new NotFoundError("Room not found");
      }
      res.json(room);
    } catch (error) {
      next(error);
    }
  };
  
  // Update Room Controller
  export const updateRoom = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const roomData = req.body;
  
    try {
      const updatedRoom = await roomService.updateRoom(id, roomData);
      if (!updatedRoom) {
        throw new NotFoundError("Room not found");
      }
      res.json(updatedRoom);
    } catch (error) {
      next(error);
    }
  };
  
  // Delete Room Controller
  export const deleteRoom = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
  
    try {
      const deletedRoom = await roomService.deleteRoom(id);
      if (!deletedRoom) {
        throw new NotFoundError("Room not found");
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
  
  // Get All Rooms Controller
  export const getAllRooms = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const rooms = await roomService.getAllRooms();
      res.json(rooms);
    } catch (error) {
      next(error);
    }
  };
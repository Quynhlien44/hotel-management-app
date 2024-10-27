import express from "express";
import {createRoom, 
        getRoomDetails, 
        updateRoom,
        deleteRoom,
        getAllRooms
} from "../controllers/RoomControllers";

const router = express.Router();

router.post("/", createRoom);
router.get("/", getAllRooms);
router.get("/:id", getRoomDetails);
router.patch("/:id", updateRoom);
router.delete("/:id", deleteRoom);
export default router;
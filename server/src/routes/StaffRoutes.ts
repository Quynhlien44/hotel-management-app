import express from "express";
import {
  createStaff,
  getStaffDetails,
  updateStaff,
  deleteStaff,
  getAllStaff,
} from "../controllers/StaffControllers";

const router = express.Router();

router.post("/", createStaff);
router.get("/", getAllStaff);
router.get("/:staffId", getStaffDetails);
router.patch("/:staffId", updateStaff);
router.delete("/:staffId", deleteStaff);

export default router;

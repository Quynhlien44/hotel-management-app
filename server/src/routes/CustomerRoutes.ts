import express from "express";
import {createCustomer} from "../controllers/CustomerControllers";

const router = express.Router();

router.post("/", createCustomer);

export default router;
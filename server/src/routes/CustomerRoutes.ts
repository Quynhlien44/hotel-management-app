import express from "express";
import {createCustomer,
    getCustomerDetails, 
    updateCustomer, 
    deleteCustomer,
    getAllCustomers
    } from "../controllers/CustomerControllers";

const router = express.Router();

router.post("/", createCustomer);
router.get("/", getAllCustomers);
router.get("/:customerId", getCustomerDetails);
router.patch("/:customerId", updateCustomer);
router.delete("/:customerId", deleteCustomer);

export default router;
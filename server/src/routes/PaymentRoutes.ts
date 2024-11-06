import express from 'express';
import { createPayment, getPaymentDetails, updatePayment, deletePayment, getAllPayments } from '../controllers/PaymentControllers';

const router = express.Router();

router.post('/', createPayment);
router.get('/', getAllPayments);
router.get('/:paymentId', getPaymentDetails);
router.patch('/:paymentId', updatePayment);
router.delete('/:paymentId', deletePayment);

export default router;

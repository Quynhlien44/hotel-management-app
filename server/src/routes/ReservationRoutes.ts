import express from 'express';
import { createReservation, 
    getReservationDetails, 
    updateReservation, 
    deleteReservation, 
    getAllReservations } from '../controllers/ReservationControllers';

const router = express.Router();

router.post('/', createReservation);
router.get('/', getAllReservations);
router.get('/:reservationId', getReservationDetails);
router.patch('/:reservationId', updateReservation);
router.delete('/:reservationId', deleteReservation);

export default router;

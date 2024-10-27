import { Schema, model } from 'mongoose';
import { IReservation } from '../interfaces/IReservation';
import { ReservationStatus } from '../enums/ReservationEnum';

// Define the Reservation schema
const ReservationSchema = new Schema<IReservation>({
    customerId: { type: String, required: true },
    roomId: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, enum: ReservationStatus, default: ReservationStatus.PENDING },
});

// Add method to get reservation details
ReservationSchema.methods.getReservationDetails = function() {
    return {
    customerId: this.customerId,
    roomId: this.roomId,
    startDate: this.startDate,
    endDate: this.endDate,
    status: this.status,
    };
};

export const Reservation = model<IReservation>('Reservation', ReservationSchema);

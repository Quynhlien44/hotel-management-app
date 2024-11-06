import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import roomRoutes from "./routes/RoomRoutes";
import customerRoutes from './routes/CustomerRoutes';
import staffRoutes from './routes/StaffRoutes';
import paymentRoutes from './routes/PaymentRoutes';
import reservationRoutes from './routes/ReservationRoutes';

const app = express();

dotenv.config({ path: ".env" });

app.get("/", (req, res) => {
  res.send("API is running.");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/room", roomRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/reservation', reservationRoutes);

export default app;
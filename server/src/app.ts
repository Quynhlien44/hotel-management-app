import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import roomRoutes from "./routes/RoomRoutes";

const app = express();

dotenv.config({ path: ".env" });

app.get("/", (req, res) => {
  res.send("API is running.");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/room", roomRoutes);

export default app;
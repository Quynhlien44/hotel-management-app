/*
- **Room**:
    - **Attributes**:
        - roomId: String
        - roomNumber: int
        - roomType: enum (SINGLE, DOUBLE, FAMILY)
        - status: enum (VACANT, RESERVED, OCCUPIED)
        - pricePerNight: double
    - **Behaviors**:
        - updateStatus(newStatus: Status): void
        - getRoomDetails(): RoomDetails

*/

import { Document } from "mongoose";

export interface IRoom extends Document {
    roomNumber: number
    pricePerNight: number
}

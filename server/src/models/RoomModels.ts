import { Schema, model } from 'mongoose';
import { IRoom } from '../interfaces/IRoom';
import { RoomTypes, RoomStatus } from '../enums/RoomEnums';

// Define the Room schema
const RoomSchema = new Schema<IRoom>({
    roomNumber: { 
        type: Number, 
        required: [true, 'Room number is required'], 
        unique: true 
    },
    roomType: { 
        type: String, 
        enum: RoomTypes, 
        required: true 
    },
    status: { 
        type: String, 
        enum: RoomStatus, 
        default: RoomStatus.VACANT 
    },
    pricePerNight: { 
        type: Number, 
        required: true 
    }
});

// Add methods to update status and get room details
RoomSchema.methods.updateStatus = function(newStatus: RoomStatus): void {
    this.status = newStatus;
};

RoomSchema.methods.getRoomDetails = function() {
    return {
        roomNumber: this.roomNumber,
        roomType: this.roomType,
        status: this.status,
        pricePerNight: this.pricePerNight
    };
};

export const Room = model<IRoom>('Room', RoomSchema);

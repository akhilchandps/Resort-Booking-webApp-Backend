import mongoose from "mongoose";


export const bookingSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    roomType: {type: String,required:true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    guests: { type: Number, required: true },
},
    { timestamps: true }

)

const Booking = mongoose.model("Booking", bookingSchema)

export default Booking;
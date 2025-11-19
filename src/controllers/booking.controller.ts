import Booking from "../models/booking.model";
import { Request, Response } from "express";


export const createBooking = async (req: Request, res: Response) => {
    try {
        const { name, email, phone, roomType, checkIn, checkOut, guests } = req.body;

        const booking = new Booking({
            name,
            email,
            phone,
            roomType,
            checkIn,
            checkOut,
            guests
        });

        await booking.save();
        res.status(201).json({ message: "Your booking has been confirmed. Thank you!", booking });
    } catch (error) {
        console.log(error); // helps debugging
        res.status(400).json({ message: "Invalid booking data", error });
    }
};


export const getBooking = async (req: Request, res: Response) => {

    try {

        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.status(200).json(bookings);

    } catch (error) {
        res.status(500).json({ message: "Error fetching bookings" });

    }
}


import express from "express";
import { createBooking, getBooking } from "../controllers/booking.controller";

const router = express.Router();

router.post("/bookings",createBooking )
router.get("/bookings",getBooking)

export default router;
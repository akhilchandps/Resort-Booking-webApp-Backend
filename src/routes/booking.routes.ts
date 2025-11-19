import express from "express";
import { createBooking, getBooking } from "../controllers/booking.controller";

const router = express.Router();

router.post("/createBooking",createBooking )
router.get("/getBooking",getBooking)

export default router;
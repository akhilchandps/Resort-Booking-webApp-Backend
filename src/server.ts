import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import bookingRoutes from "./routes/booking.routes";

dotenv.config();

const app= express();
app.use(express.json());


app.use(cors());
app.use("/api",bookingRoutes)

const PORT = 3000 


app.listen(PORT,()=>{
    connectDB();
    console.log("Server Running on PORT:",PORT);  
})







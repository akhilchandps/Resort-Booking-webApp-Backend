import mongoose from "mongoose";

export const connectDB = async () => {

    try {
        mongoose.connect(process.env.MONDODB_URI as string)
        console.log("MongoDB Connected");

    } catch (error) {
        console.error("DB connection error:", error);
    }
}
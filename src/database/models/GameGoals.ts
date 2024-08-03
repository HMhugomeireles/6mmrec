import mongoose from "mongoose";

export const GameGoalsSchema = new mongoose.Schema({
    icon: String,
    type: String,
    points: Number
})
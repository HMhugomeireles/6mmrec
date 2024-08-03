import mongoose from "mongoose";

export const TeamSchema = new mongoose.Schema({
    name: String,
    flag: String,
    city: String
})
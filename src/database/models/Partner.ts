import mongoose from "mongoose";

export const PartnerSchema = new mongoose.Schema({
    name: String,
    url: String,
    icon: String
})
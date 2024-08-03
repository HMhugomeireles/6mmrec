import mongoose from "mongoose";

export async function dbConnection() {
    try {
        await mongoose.connect(process.env.MONGO_DATABASE_URL!);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log('Error in to connecting into mongo.')
    } finally {
        await mongoose.disconnect();
    }
}
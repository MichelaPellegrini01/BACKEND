import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();
export async function connect() {

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connesso correttamente DB")
        console.log("Database connesso:", mongoose.connection.name);
    }
    catch (error){
console.log("Errore nella connessione DB", error)
    }

};
import mongoose from "mongoose";

const conn = process.env.NEXT_PUBLIC_MONGODB_URI;

const connectDB = async()=>{
    try {
        if(!conn){
            throw new Error("Database NOT Found..!!")
        }
        await mongoose.connect(conn)
    } catch (error) {
        console.log("DB is not connected..!!", error);
    }
}

connectDB()

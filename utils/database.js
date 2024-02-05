import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    // await  mongoose.Promise = global.Promise;  

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log("Error connection Daren", error);
  }
}
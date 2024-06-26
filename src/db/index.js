import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`,
    );
    console.log(
      `\n Mongodb connected !! DB HOST: ${connectionInstance.connection.host}/${DB_NAME}`,
    );
  } catch (error) {
    console.error("MONGODB connection failed: ", error);
    process.exit(1);
  }
};

export default connectDB;

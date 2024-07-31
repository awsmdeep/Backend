import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

// Asynchronous function to connect to MongoDB
const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB using the connection string from environment variables and the database name from constants
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        // Log a success message if the connection is successful
        console.log(`MongoDB connected || DB_HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        // Log an error message if the connection fails
        console.log("MONGODB ERROR:", error);
        
        // Exit the process with a failure code
        process.exit(1);
    }
}

// Export the connectDB function as the default export
export default connectDB;

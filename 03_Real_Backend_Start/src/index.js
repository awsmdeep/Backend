// Import necessary modules
import dotenv from 'dotenv'; // Module to load environment variables from a .env file
import connectDB from "./db/index.js"; // Function to connect to the MongoDB database
import app from './app.js'; // Express application

// Load environment variables from a .env file
dotenv.config({
    path: './env' // Specify the path to the .env file
});

// Connect to the database and start the server
connectDB()
    .then(() => {
        // If the database connection is successful, start the Express server
        app.listen(process.env.PORT || 3000, () => {
            // Log a message indicating the server is running and the port number
            console.log(`Server is running at port number: ${process.env.PORT || 3000}`);
        });
    })
    .catch((err) => {
        // If there is an error connecting to the database, log the error
        console.log("MongoDB connection error: ", err);
    });

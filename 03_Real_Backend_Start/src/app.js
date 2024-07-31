// Import necessary modules
import express from "express"; // Importing Express framework
import cors from 'cors'; // Importing CORS middleware
import cookieParser from "cookie-parser"; // Importing cookie-parser middleware

// Create an Express application
const app = express();

// Use CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from this origin
    credentials: true // Allow credentials (cookies, authorization headers, etc.) to be included in requests
}));

// Middleware to parse incoming JSON requests
app.use(express.json({ limit: "20kb" })); // Limit the JSON payload to 20kb

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true, limit: "20kb" })); // Limit the URL-encoded payload to 20kb

// Middleware to serve static files from the "public" directory
app.use(express.static("public"));

// Middleware to parse cookies in incoming requests
app.use(cookieParser());

// Export the configured Express application
export default app;

// Import necessary modules
import express from "express"; // Framework for building web applications
import cors from "cors"; // Middleware for enabling Cross-Origin Resource Sharing
import dotenv from "dotenv"; // Module to load environment variables from a .env file

// Import custom modules
//! don't forget to import router from your routes files
import router from "./routes/product.routes.js";
import dbConnect from "./config/mongoose.config.js"; // Function to establish a connection to the database

// Create an instance of the Express application
const app = express();

// Configure middleware
app.use(express.json(), cors()); // Enable JSON parsing for incoming requests and allow cross-origin requests

// Load environment variables from the .env file
dotenv.config();

// Retrieve the server port from environment variables
const PORT = process.env.PORT;

// Connect to the MongoDB database
dbConnect();

//!don't forget to use router in your app
app.use("/api", router)
// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`); // Log server URL to the console
});

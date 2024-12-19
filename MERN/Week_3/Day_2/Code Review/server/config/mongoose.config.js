// Import the `connect` method from Mongoose to establish a connection with MongoDB
import { connect } from "mongoose";

// Import the dotenv package to load environment variables from the .env file
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Extract MongoDB connection URI and database name from environment variables
const MONGODB_URI = process.env.MONGODB_URI; // MongoDB URI (e.g., mongodb+srv://<username>:<password>@cluster.mongodb.net)
const DB = process.env.DB; // Database name

/**
 * Establish a connection to the MongoDB database.
 * This function connects to the database specified by the MONGODB_URI and DB environment variables.
 * Logs a success message upon successful connection or throws an error if the connection fails.
 */
async function dbConnect() {
  try {
    // Connect to MongoDB with the specified URI and database name
    await connect(MONGODB_URI, {
      dbName: DB, // Specify the database name
    });
    console.log(
      `Pinged your deployment. You successfully connected to MongoDB! DB name: ${DB}`
    );
  } catch (error) {
    console.log(error); // Log any connection errors for debugging
    throw error; // Throw the error to ensure proper error handling
  }
}

// Export the dbConnect function for use in other parts of the application
export default dbConnect;

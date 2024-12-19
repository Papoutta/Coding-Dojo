import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from "./routes/books.routes.js"


const app = express();
const PORT = process.env.PORT;
dotenv.config();

// -- MIDDLEWARE --
app.use(express.json(), cors());
app.use("/api", router)

dbConnect();

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    err.name = "Not Found";
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err.statusCode);
    err.name === "ValidationError" ? err.statusCode = 400 : "";
    // Normalize the error
    const normalizedError = {
        statusCode: err.statusCode || 500,
        message: err.message || 'Something went wrong',
        name: err.name || 'Server Error',
    };
    // Return the normalized error
    res.status(normalizedError.statusCode).json(normalizedError);
});




app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);

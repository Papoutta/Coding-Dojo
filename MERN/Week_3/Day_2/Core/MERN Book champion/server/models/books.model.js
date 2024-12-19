import {model, Schema} from 'mongoose';
const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Book title is required!"],
            minlength: [2, "Book title must be at least 2 characters long!"],
            maxlength: [255, "Book title must be less than 255 characters long"]
        },
        author: {
            type: String,
            required: [true, "Author is required!"],
            minlength: [2, "Author must be at least 2 characters long!"],
            maxlength: [255, "Author must be less than 255 characters long"]
        },
        pages: {
            type: Number,
            required: [true, "Pages number is required!"],
            min: [1, "Book must contain at least 1 page"]
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Book = model("Book", BookSchema);
export default Book;
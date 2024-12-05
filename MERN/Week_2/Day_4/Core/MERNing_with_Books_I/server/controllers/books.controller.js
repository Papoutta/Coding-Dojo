import Book from '../models/books.models.js';

const BookController = {
    create: async (req, res) => {
        try {
            const newBook = await Book.create(req.body)
            res.json(newBook)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    ReadAll: async (req, res) => {
        try {
            const AllBooks = await Book.find()
            res.json(AllBooks)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    ReadOne: async (req, res) => {
        try {
            const OneBook = await Book.findById(req.params.id)
            res.json(OneBook)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    update: async (req, res) => {
        const options = {
            new: true,
            runValidators: true
        }
        try {
            const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(updateBook)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    DeleteOne: async (req, res) => {
        try {
            const DeleteOneBook = await Book.findByIdAndDelete(req.params.id)
            res.json({ response: " ok " })
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },

}

export default BookController

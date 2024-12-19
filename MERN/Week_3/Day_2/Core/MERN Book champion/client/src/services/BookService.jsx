import axios from 'axios'

const http = axios.create({
    baseURL : "http://localhost:8000/api"
});

function getAllBooks() {
    return http.get('/book')
    .then(response => response.data)
    .catch(err => {
        throw err;
    })
}

function createBook(book) {
    return http.post('/book/', book)
    .then(response => response.data)
    .catch(err => {
        throw err;
    })
}

function updateOneBook() {
    return http.put(`/book/${book._id}`, book)
    .then(response => response.data)
    .catch(err => {
        throw err;
    })
}

export {
    getAllBooks,
    createBook,
    updateOneBook
}
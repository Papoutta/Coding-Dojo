import React , {useState} from 'react'
import BookList from './components/BookList';
import FilterBooks from './components/FilterBooks';

const App = () => {
  const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", read: true },
    { title: "1984", author: "George Orwell", read: false },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", read: true },
    { title: "Moby-Dick", author: "Herman Melville", read: false },
    { title: "Pride and Prejudice", author: "Jane Austen", read: true },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", read: false },
    { title: "The Hobbit", author: "J.R.R. Tolkien", read: true },
    { title: "Brave New World", author: "Aldous Huxley", read: false },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", read: true },
    { title: "Fahrenheit 451", author: "Ray Bradbury", read: false },
  ];
  
  const [filter, setFilter] = useState("all")

  const filterBooks = books.filter((b) => {
    if (filter == "read") return b.read
    if (filter == "unread") return !b.read
    return true
  })

  return (
    <div>
        <FilterBooks onFilter={setFilter}/>
        <BookList books={filterBooks}/>
    </div>
  )
}

export default App
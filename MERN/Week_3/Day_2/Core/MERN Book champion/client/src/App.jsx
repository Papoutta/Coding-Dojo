import './App.css'
import { Route, Routes, Link } from "react-router-dom"
import Home from "./views/Home"
import Create from "./views/CreateBook"
import BookDetails from './views/BookDetails'
import UpdateBookDetails from './views/UpdateBookDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/:id/details' element={<BookDetails/>}/>
        <Route path='/:id/update' element={<UpdateBookDetails/>}/>
      </Routes>
    </>
  )
}

export default App
import './App.css'
import { Route, Routes, Link } from "react-router-dom"
import Home from "./views/Home"
import Create from "./views/CreateBook"
import BookDetails from './views/BookDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/:id/details' element={<BookDetails/>}/>
      </Routes>
    </>
  )
}

export default App
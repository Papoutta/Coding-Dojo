import React from 'react'
import NavBar from '../components/NavBar'
import { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { getAllBooks } from '../services/BookService'


function Home() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        getAllBooks()    
        .then((res) => {
                setBooks(res)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])



  return (
    <div>
        <NavBar x={"Book Cataloge"}/>
        <div className="container">
            <table  className='table table-hover table-bordered table-striped text-center'>
                <thead>
                    <tr>
                        <th style={{width : "30%"}}>Title</th>
                        <th>Author</th>
                        <th>Page Count</th>
                        <th>Available</th>
                        <th>Book Page</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.pages}</td>
                            <td>{book.isAvailable ? "Yes" : "No" } | <Link className='btn btn-primary' to={`/${book._id}/update`}>Edit</Link></td>
                            <td><Link className='btn btn-success' to={`/${book._id}/details`}>Book Details</Link></td>
                        </tr>                        
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home
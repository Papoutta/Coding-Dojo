import {React, useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"


const BookDetails = () => {

    const {id} = useParams({})
    const [book, setBook] = useState([])
    const Base_URL = "http://localhost:8000/api/book/" + id
    const navigate=useNavigate()


    useEffect(() => {
        axios.get(Base_URL)
            .then((res) => {
                console.log(res.data)
                setBook(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    const deletebook = () => { axios.delete(`http://localhost:8000/api/book/${id}`)
        .then((res) => {
            console.log(res.data);
            navigate("/");
        })
    }

    return (
        <div>
            <NavBar x={book.title} />
            <hr />
            <div className='mt-5 container col-6 border shadow rounded text-center p-5'>
                <h1>{book.title}</h1>
                <h3>By {book.author}</h3>
                <br />
                <h3>Page Count : {book.pages}</h3>
                <h3 style={{color: "green"}}>Available for borrowing</h3>
                <br />
                <button onClick={deletebook} className='btn btn-danger'>Borrow</button>

            </div>
        </div>
    )
}

export default BookDetails
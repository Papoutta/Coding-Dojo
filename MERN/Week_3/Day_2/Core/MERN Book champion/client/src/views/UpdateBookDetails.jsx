import {React,useEffect,useState} from 'react'
import NavBar from '../components/NavBar'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { updateOneBook } from '../services/BookService'

const UpdateBookDetails = () => {

    const navigate = useNavigate()
    const {id} = useParams({})

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState(2)
    const [isAvailable, setIsAvailable] = useState(false)

    const [ErrorHandler, setErrorHandler] = useState({})


    useEffect(() => {
        //~ Fetch data
        axios.get("http://localhost:8000/api/book/" + id)
            .then(res => {
                console.log(res.data)
                setTitle(res.data.title)
                setAuthor(res.data.author)
                setPages(res.data.pages)
                setIsAvailable(res.data.isAvailable)
            })
            .catch(err => {
                console.log("❌❌❌", err)
            })
                
    }, [id])
    
    const submitHandler = (e) => {
        e.preventDefault();
        updateOneBook({_id:id,title,author,pages,isAvailable})
            .then((res) => {
                console.log("Book added:", res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log("❌❌❌", err.response.data.errors)
                setErrorHandler(err.response.data.errors)       
            });
    };


    
return (
    <div>
        <NavBar x={`Edit ${title}`}/>
        <div>
            <form onSubmit={submitHandler} className='col-5 container rounded shadow-lg  p-5'>
                <div className="form-group mt-3">
                    <label className='form-label'>Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} name='title' type="text" className="form-control" ></input>
                    {ErrorHandler.title && <p className='alert alert-danger'>{ErrorHandler.title.message}</p>}
                </div>
                <div className="form-group mt-3">
                    <label className='form-label'>Author Name</label>
                    <input value={author} onChange={e => setAuthor(e.target.value)} name='author' type="text" className="form-control"></input>
                    {ErrorHandler.author && <p className='alert alert-danger'>{ErrorHandler.author.message}</p>}
                </div>
                <div className="form-group mt-3">
                    <label className='form-label'>Page Count</label>
                    <input value={pages} onChange={e => setPages(e.target.value)} name='pages' type="number" className="form-control"></input>
                    {ErrorHandler.pages && <p className='alert alert-danger'>{ErrorHandler.pages.message}</p>}
                </div>
                <div className="form-group mt-3 d-flex gap-4 align-items-center">
                    <label className='form-label m-0'>Is it Available ?</label>
                    <input checked={isAvailable} onChange={e => setIsAvailable(e.target.checked)} name='isAvailable' type="checkbox"></input>
                </div>
                <button className='btn btn-primary mt-3'>Edit</button>
            </form>
        </div>
    </div>
)}

export default UpdateBookDetails
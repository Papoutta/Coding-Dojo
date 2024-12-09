import {React,useState} from 'react'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function CreateBook() {

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    pages: 0,
    isAvailable: true

  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewBook(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value    
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:8000/api/book", newBook)
        .then((res) => {
            console.log("Book added:", res.data);
            setNewBook((prevBooks) => [...prevBooks, res.data]);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        });
};

const navigate=useNavigate()


  return (
    <div>
        <NavBar x="Add a book"/>
        <div>
          <form onSubmit={submitHandler} className='col-5 container border rounded shadow p-5'>
            <div className="form-group mt-3">
              <label className='form-label'>Title</label>
              <input value={newBook.title} onChange={handleChange} name='title' type="text" className="form-control" placeholder="Add your new book"></input>
            </div>
            <div className="form-group mt-3">
              <label className='form-label'>Author Name</label>
              <input value={newBook.author} onChange={handleChange} name='author' type="text" className="form-control" placeholder="Precise the author"></input>
            </div>
            <div className="form-group mt-3">
              <label className='form-label'>Page Count</label>
              <input value={newBook.pages} onChange={handleChange} name='pages' type="number" className="form-control" placeholder="Precise the number of pages"></input>
            </div>
            <div className="form-group mt-3 d-flex gap-4 align-items-center">
              <label className='form-label m-0'>Is it Available ?</label>
              <input value={newBook.isAvailable} onChange={handleChange} name='isAvailable' type="checkbox" placeholder="Precise the number of pages"></input>
            </div>
            <button className='btn btn-primary mt-3'>Add a Book</button>
          </form>
        </div>
    </div>
  )
}

export default CreateBook
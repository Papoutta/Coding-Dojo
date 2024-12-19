import {React,useState} from 'react'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom';
import { createBook } from '../services/BookService';



function CreateBook() {
  //client errors
  const [formErrors, setFormErrors] = useState({
    title : "Title is required",
    author : "Author is required",
    pages : "Pages need to be at least 1"
  })

  // server errors
  const [ErrorHandler, setErrorHandler] = useState({})

  const navigate=useNavigate()

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [pages, setPages] = useState(0)
  const [isAvailable, setIsAvailable] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    createBook({title,author,pages,isAvailable})        
    .then((res) => {
          console.log("Book added:", res);
          navigate("/");
      })
      .catch((err) => {
        console.log("❌❌❌", err.response.data.errors)
        setErrorHandler(err.response.data.errors)           
      });
};

  const validateForm = () => {
    return Object.values(formErrors).every(value => value === '');
    
  }

  const titleHandler = (e) => {
    setTitle(e.target.value)
    const value = e.target.value.trim()
    let errorMsg = ""

    if (value) {
      if (value.length <2){
        errorMsg = 'Title must be at least 2 characters long !'
      }
      else if (value.length>255){
        errorMsg = 'Title must be less than 255 characters long !'
      }
      else if (value.length == 0) {
        errorMsg = "Title is required"
      }
    }
    setFormErrors({...formErrors, title : errorMsg})
  }

  const authorHandler = (e) => {
    setAuthor(e.target.value)
    const value = e.target.value.trim()
    let errorMsg = ""

    if (value) {
      if (value.length <2){
        errorMsg = 'Author name must be at least 2 characters long !'
      }
      else if (value.length>255){
        errorMsg = 'Author name must be less than 255 characters long !'
      }
      else if (value.length == 0){
        errorMsg = "Author name is required"
      }
    }
    setFormErrors({...formErrors, author : errorMsg})

  }

  const pagesHandler = (e) => {
    setPages(e.target.value)
    const value = e.target.value.trim()
    let errorMsg = ""

    if (value) {
      if (value <1){
        errorMsg = 'Book must contain at least 1 page !'
      }
      else if (value == 0){
        errorMsg = "Pages number is required !"
      }
    }
    setFormErrors({...formErrors, pages : errorMsg})    
  }

  const isAvailableHandler = (e) => {
    setIsAvailable(e.target.checked)
  }

  return (
    <div>
        <NavBar x="Add a book"/>
        <div>
          <form onSubmit={submitHandler} className='col-5 container border rounded shadow p-5'>
            <div className="form-group mt-3">
              <label className='form-label'>Title</label>
              <input value={title} onChange={titleHandler} name='title' type="text" className="form-control" placeholder="Add your new book"></input>
              {formErrors.title && (<p className='alert alert-warning'>{formErrors.title}</p>)}
              {ErrorHandler.title && <p className='alert alert-danger'>{ErrorHandler.title.message}</p>}
            </div>
            <div className="form-group mt-3">
              <label className='form-label'>Author Name</label>
              <input value={author} onChange={authorHandler} name='author' type="text" className="form-control" placeholder="Precise the author"></input>
              {formErrors.author && (<p className='alert alert-warning'>{formErrors.author}</p>)}
              {ErrorHandler.author && <p className='alert alert-danger'>{ErrorHandler.author.message}</p>}

            </div>
            <div className="form-group mt-3">
              <label className='form-label'>Page Count</label>
              <input value={pages} onChange={pagesHandler} name='pages' type="number" className="form-control" placeholder="Precise the number of pages"></input>
              {formErrors.pages && (<p className='alert alert-warning'>{formErrors.pages}</p>)}
              {ErrorHandler.pages && <p className='alert alert-danger'>{ErrorHandler.pages.message}</p>}

            </div>
            <div className="form-group mt-3 d-flex gap-4 align-items-center">
              <label className='form-label m-0'>Is it Available ?</label>
              <input checked={isAvailable} onChange={isAvailableHandler} name='isAvailable' type="checkbox" placeholder="Precise the number of pages"></input>
            </div>
            <button disabled={!validateForm()} className='btn btn-primary mt-3'>Add a Book</button>
          </form>
        </div>
    </div>
  )
}

export default CreateBook
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const AddProductForm = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [picture, setPicture] = useState("")
  const [availableInStock, setAvailableInStock] = useState(true)
  const [description, setDescription] = useState("")
  const [expireDate, setExpireDate] = useState("")
  const [errorHandler, setErrorHandler] = useState("")

  const nav = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post("/http://localhost:8000/api/products", {
      name, price, picture, description, availableInStock, expireDate
    })
    .then((res)=>{
      console.log(res);
      nav("/")
      
    })
    .catch((err)=>{
      console.log(err.response.data.errors)
      setErrorHandler(err.response.data.errors);
      
    })
  }

  return (
    <div>
      <form className="col-6" onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter product name"
            onChange={(e)=>setName(e.target.value)}

          />
          {errorHandler.name && (<p className="alert alert-danger">
            {errorHandler.name.message}
          </p>)}
        </div>

        <div className="mb-3">
          <label for="price" className="form-label">
            Price ($)
          </label>
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder="Enter product price"
            step={0.01}
            onChange={(e)=>setPrice(e.target.value)}
          />
          {errorHandler.price && (<p className="alert alert-danger">
            {errorHandler.price.message}
          </p>)}
        </div>

        <div className="mb-3">
          <label for="picture" className="form-label">
            Product Picture URL
          </label>
          <input
            type="text"
            className="form-control"
            name="picture"
            placeholder="Enter product picture URL"
            onChange={(e)=>setPicture(e.target.value)}
          />
          {errorHandler.picture && (<p className="alert alert-danger">
            {errorHandler.picture.message}
          </p>)}
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="availableInStock"
            checked={availableInStock}
            onChange={(e)=> setAvailableInStock(e.target.checked)}
          />
          <label className="form-check-label" for="availableInStock">
            Available in Stock
          </label>
        </div>

        <div className="mb-3">
          <label for="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            name="description"
            placeholder="Enter product description"
            rows="3"
            onChange={(e)=>setDescription(e.target.value)}
          ></textarea>
          {errorHandler.description && (<p className="alert alert-danger">
            {errorHandler.description.message}
          </p>)}
        </div>

        <div className="mb-3">
          <label for="expireDate" className="form-label">
            Expire Date
          </label>
          <input
            type="date"
            className="form-control"
            name="expireDate"
            onChange={(e)=>setExpireDate(e.target.value)}
          />
          {errorHandler.expireDate && (<p className="alert alert-danger">
            {errorHandler.expireDate.message}
          </p>)}
        </div>

        <button type="submit" className="btn btn-primary btn-lg w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;

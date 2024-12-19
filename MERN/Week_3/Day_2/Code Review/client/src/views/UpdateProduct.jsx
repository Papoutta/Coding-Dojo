import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [picture, setPicture] = useState("")
  const [availableInStock, setAvailableInStock] = useState(true)
  const [description, setDescription] = useState("")
  const [expireDate, setExpireDate] = useState("")
  const [errorHandler, setErrorHandler] = useState("")

  const nav = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    axios.get("http://localhost:8000/api/products/"+id)
    .then((res)=>{
      setPrice(res.data.price);
        setName(res.data.name);
        setAvailableInStock(res.data.availableInStock);
        setDescription(res.data.description);
        // Format the date to YYYY-MM-DD for the date input
        const formattedDate = new Date(res.data.expireDate)
          .toISOString()
          .split("T")[0];
        setExpireDate(formattedDate);
        setPicture(res.data.picture);
    })
    .catch((err)=>console.log(err)
      
      
    )
  },[])

  const submitHandler = (e)=>{
    e.preventDefault()
    const updatedProduct={
      name,
      price,
      description,
      picture,
      expireDate,
      availableInStock
    }

    axios.put("http://localhost:8000/api/products/"+id, updatedProduct)
    .then((res)=>{
      nav("/")
    })
    .catch((err)=>{
      setErrorHandler(err.response.data.errors)
    })
  }
  return (
    <div>
      <NavBar title={`Edit${name}`}/>
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
            value={name}
          />
          {errorHandler.name && (<p className="alert alert-danger">
            {errorHandler.name.message}
          </p>)}
        </div>

        <div className="mb-3">
          <label for="price" className="form-label">
          Price($)
          </label>
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder="Enter product price"
            step={0.01}
            onChange={(e)=>setPrice(e.target.value)}
            value={price}
          />
          {errorHandler.price && (<p className="alert alert-danger">
            {errorHandler.price.message}
          </p>)}
        </div>

        <div className="mb-3">
          <label for="picture" className="form-label">
          Picture Name
          </label>
          <input
            type="text"
            className="form-control"
            name="picture"
            placeholder="Enter product picture URL"
            onChange={(e)=>setPicture(e.target.value)}
            value={picture}
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
            value={description}
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
            value={expireDate}
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

export default UpdateProduct;

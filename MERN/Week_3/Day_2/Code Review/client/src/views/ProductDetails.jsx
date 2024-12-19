import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom"
import NavBar from "../components/NavBar";

const ProductDetails = () => {
  const {id} = useParams()
  const [oneProduct, setOneProduct]= useState({})

  useEffect(()=>{
    axios.get("http://localhost:8000/api/products/"+id)
    .then((res)=>{
      setOneProduct({...res.data, expireDate : new Date(res.data.expireDate).toISOString().split("T")[0]})
    })
    .catch((err)=>console.log(err)
      
      
    )
  },[])

  const nav = useNavigate()

  const deleteOneProduct = (productId)=>{
    axios.delete(`http://localhost:8000/api/products/${productId}`)
    .then((res)=>{
      nav('/')
    })
    .catch((err)=> {
      console.log(err);
      
    })
  }
  return (
    <div>
      <NavBar title={oneProduct.name}/>
      <div className="card" style={{ width: "80%" }} >
        <h2 className="card-title text-left">{oneProduct.name}</h2>
        <img
          className="card-img-top mx-auto d-block"
          style={{ width: "60%", height: "10%" }}
          src={`/images/${oneProduct.picture}`}
          alt={oneProduct.name}
        />
        <div className="d-flex justify-content-between">
        {oneProduct.availableInStock ?
              <h5 style={{ color: "green" }}>Available </h5>
            :
              <h5 style={{ color: "red" }}>Not Available </h5>
            }
          <div className="d-flex align-items-center">
            <h5 className="mr-3">  {oneProduct.price}$ </h5>
            <Link to={`/product/${oneProduct._id}/update`}
              className="btn btn-success mr-3"

            >
              Update
            </Link>
            <button
              className="btn btn-danger"
              onClick={()=>deleteOneProduct(oneProduct._id)}
            >
              Delete
            </button>
          </div>
        </div>
        <div>

          <h4 className="text-warning text-left">{oneProduct.expireDate}</h4>
          <p className="card-text text-left">{oneProduct.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

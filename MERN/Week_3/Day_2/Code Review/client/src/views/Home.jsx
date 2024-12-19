import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import NavBar from "../components/NavBar";

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
      .then((res)=>{
        setProducts(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
  },[])
  
  return (
    <div className="container">
        <NavBar title="All Products"/>
      {products.map(product=>(
        <div style={{ width: "80%" }} key={product._id}>
          <h3>
            <Link to={`/product/${product._id}`}> {product.name}</Link>
          </h3>
          <img
            style={{ width: "20%", height: "20%" }}
            src={`./images/${product.picture}`}
            alt={product.name}
          />
          <div className="d-flex justify-content-between">
          {product.availableInStock ?
              <h5 style={{ color: "green" }}>Available </h5>
            :
              <h5 style={{ color: "red" }}>Not Available </h5>
            }
            <div className="d-flex align-items-center">
              <h5 className="mr-3">  {product.price}$</h5>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

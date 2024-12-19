import React from "react";
import {Link} from "react-router-dom"
const NavBar = ({title}) => {
  return (
    <div className="d-flex justify-content-between">
      <h1>{title}</h1>
      <div className="">
        <Link className="btn btn-dark mr-1" to={"/"}>Home</Link>
        <Link className="btn btn-dark" to={"/create"}>Add Product</Link>
      </div>
    </div>
  );
};

export default NavBar;
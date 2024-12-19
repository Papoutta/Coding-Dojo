import React from 'react'
import {Link } from "react-router-dom"


function NavBar({x}) {
  return (
    <div className='p-4 d-flex justify-content-between align-items-center'>
        <div className='d-flex flex-column gap-2'>
            <Link className='btn btn-primary' to={"/"}>Catalog</Link>
            <Link className='btn btn-primary' to={"/create"}>Add Book</Link>
        </div>
        <h1>{x}</h1>
    </div>
  )
}

export default NavBar
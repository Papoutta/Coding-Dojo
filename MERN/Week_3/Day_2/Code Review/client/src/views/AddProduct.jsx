import React from 'react'
import NavBar from '../components/NavBar'
import AddProductForm from '../components/AddProductForm'


const AddProduct = () => {
  return (
    <div>
        <NavBar title={"Add Product"}/>
        <AddProductForm/>
    </div>
  )
}

export default AddProduct
import {Routes, Route} from "react-router-dom"
import AddProduct from "./views/AddProduct";
import Home from "./views/Home"
import ProductDetails from "./views/ProductDetails";
import UpdateProduct from "./views/UpdateProduct";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<AddProduct />}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/product/:id/update" element={<UpdateProduct/>}/>

      </Routes>
      
    </>
  );
}

export default App

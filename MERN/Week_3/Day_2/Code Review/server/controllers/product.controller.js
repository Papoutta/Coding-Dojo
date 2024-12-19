import Product from "../models/product.model.js";

async function createProduct(req, res) {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getAllProducts(req, res) {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getOneProduct(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
async function updateProduct(req, res) {
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deleteOneProduct(req, res) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(deletedProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}


export {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteOneProduct
}
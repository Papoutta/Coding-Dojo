import {Router} from "express"
import {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteOneProduct
} from "../controllers/product.controller.js";


const router = Router();

router.route("/products")
    .get(getAllProducts)
    .post(createProduct);

    router.route("/products/:id")
    .get(getOneProduct)
    .put(updateProduct)
    .delete(deleteOneProduct);

export default router;
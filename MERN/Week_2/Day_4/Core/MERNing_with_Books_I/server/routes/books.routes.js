import BookController from "../controllers/books.controller.js";
import {Router} from "express"


const router = Router()

router.route("/book")
    .post(BookController.create)
    .get(BookController.ReadAll)


router.route("/book/:id")
    .get(BookController.ReadOne)
    .put(BookController.update)
    .delete(BookController.DeleteOne)

export default router
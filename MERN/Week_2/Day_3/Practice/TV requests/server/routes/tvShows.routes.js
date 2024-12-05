import { Router } from "express";
import tvShowController from "../controllers/Tvshows.controller.js";
const router = Router()

router.route("/tvShows")
    .get(tvShowController.readAll)

router.route("/tvShows/:yearOfCreation")
    .get(tvShowController.readYear)

router.route("/tvShows/:tvShow")
    .delete(tvShowController.delete)
    .patch(tvShowController.update)

router.route("/create/show")
    .post(tvShowController.create)


export default router;

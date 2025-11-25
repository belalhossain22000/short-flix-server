// Shorts.routes: Module file for the Shorts.routes functionality.
import express from "express";
import { ShortsController } from "./Shorts.controller";
import { ShortsValidation } from "./Shorts.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.post(
    "/",
    validateRequest(ShortsValidation.AddNewShortVideoValidationSchema),
    ShortsController.addNewShorts
);

router.get("/", ShortsController.getAllShorts);

export const ShortsRoutes = router;
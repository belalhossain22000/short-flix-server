import { Router } from "express";
import { shortsController } from "./Shorts.controller";

const router = Router();

// create shorts
router.post("/create", shortsController.createShorts);

// get all shorts
router.get("/", shortsController.getAllShortss);

// get single shorts by id
router.get("/:id", shortsController.getSingleShorts);

// update shorts
router.put("/:id", shortsController.updateShorts);

// delete shorts
router.delete("/:id", shortsController.deleteShorts);

export const shortsRoutes = router;

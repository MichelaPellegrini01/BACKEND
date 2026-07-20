import express from "express";
import upload from "../config/multer.js";
import { getDogs, createDog, getDogById, updateDog, deleteDog } from "../controllers/dogController.js";

const router = express.Router();
router.get("/", getDogs);
router.get("/:id", getDogById);
router.post("/", upload.single("image"), createDog);
router.put("/:id", upload.single("image"), updateDog);
router.delete("/:id", deleteDog);
export default router;
import express from "express";
import { getDogs, createDog, getDogById, updateDog, deleteDog } from "../controllers/dogController.js";

const router = express.Router();
router.get("/", getDogs);
router.get("/:id", getDogById);
router.post("/", createDog);
router.put("/:id", updateDog);
router.delete("/:id", deleteDog);
export default router;
import express from "express";
import { getDogs, createDog } from "../controllers/dogController.js";

const router = express.Router();
router.get("/", getDogs);
router.post("/", createDog);
export default router;
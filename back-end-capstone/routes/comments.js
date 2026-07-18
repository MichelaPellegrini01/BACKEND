import express from "express";
import {
  getCommentsByDog,
  createComment,
} from "../controllers/commentControllers.js";

const router = express.Router();

router.get("/:dogId", getCommentsByDog);

router.post("/", createComment);

export default router;
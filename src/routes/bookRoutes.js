import express from "express";
import BookController from "../controllers/BookController.js";

const router = express.Router();

router.post("/register-book", BookController.registerBook);

export default router;

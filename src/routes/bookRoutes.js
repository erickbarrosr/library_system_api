import express from "express";
import BookController from "../controllers/BookController.js";

const router = express.Router();

router.post("/register", BookController.registerBook);
router.get("/books", BookController.getBooks);
router.get("/book/:id", BookController.getBookById);
router.put("/book/:id", BookController.updateBook);
router.delete("/book/:id", BookController.deleteBook);
router.get("/books/query", BookController.titleQuery);

export default router;

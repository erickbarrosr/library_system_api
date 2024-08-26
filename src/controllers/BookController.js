import Book from "../models/Book.js";
import Livro from "../models/Book.js";

class BookController {
  static async registerBook(req, res) {
    try {
      const book = new Book(req.body);

      const newBook = await book.save();

      res.status(201).json({ message: "Livro criado com sucesso!", newBook });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Erro ao registrar livro.` });
    }
  }

  static async getBooks(req, res) {
    try {
      const books = await Book.find({});

      res.status(200).json({ message: "Livros encontrados!", books });
    } catch (error) {}
  }

  static async getOneBook(req, res) {}

  static async updateBook(req, res) {}

  static async deleteBook(req, res) {}
}

export default BookController;

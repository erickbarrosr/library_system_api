import Book from "../models/Book.js";
import Livro from "../models/Book.js";

class BookController {
  static async registerBook(req, res) {
    try {
      const newBook = new Book(req.body);

      const savedBook = await newBook.save();

      res.status(201).json({ message: "Livro criado com sucesso!", savedBook });
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
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Erro ao listar livros.` });
    }
  }

  static async getBookById(req, res) {
    try {
      const id = req.params.id;

      const book = await Book.findById(id);

      res.status(200).json({ message: "Livro encontrado!", book });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Erro ao listar livro.` });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;

      const book = await Book.findByIdAndUpdate(id, { $set: req.body });

      const updatedBook = await Book.find({ _id: book._id });

      res.status(200).json({ message: "Livro atualizado!", updatedBook });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Erro ao atualizar livro.` });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;

      const book = await Book.findByIdAndDelete(id);

      res.status(200).json({ message: "Livro removido!", book });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Erro ao remover livro.` });
    }
  }

  static async titleQuery(req, res) {
    try {
      const query = req.query.title;

      const response = await Book.find({ title: query });

      res.status(200).json({ message: "Livro encontrado!", response });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Erro ao buscar livro pelo título.`,
      });
    }
  }
}

export default BookController;

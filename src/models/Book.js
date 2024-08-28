import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    publisher: { type: String },
    price: { type: Number },
    pages: { type: Number },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;

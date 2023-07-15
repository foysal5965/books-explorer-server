import { Schema, model } from "mongoose";
import { BooksModel, IBooks } from "./books.interface";

export const BooksSchema = new Schema<IBooks, BooksModel>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publicationData: {
    type: String,
    required: true,
  },
  image:{
    type: String
  }
});
export const Books = model<IBooks, BooksModel>('Books', BooksSchema)

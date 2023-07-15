import express from 'express'
import { booksController } from './books.controller'
const router = express.Router()
router.get('/', booksController.getAllBooks)
export const booksRouter={
    router
}
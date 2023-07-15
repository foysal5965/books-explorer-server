import express from 'express';
import { booksRouter } from '../app/moduules/books/books.route';
const router = express.Router();

const modulesRouter =[
    {
        path:'/books',
        route: booksRouter.router
    }
]

modulesRouter.forEach(route => router.use(route.path, route.route));
export default router;

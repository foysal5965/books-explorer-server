import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import { booksSearchableField } from "./books.constants";
import { booksService } from "./books.service";
import sendResponse from "../../../shared/sendResponse";
import { IBooks } from "./books.interface";

const getAllBooks = catchAsync(
    async(req: Request, res: Response)=>{
        const filters = pick(req.body, booksSearchableField)
        const result = await booksService.getAllBooks(filters)
        sendResponse<IBooks[]>(res, {
            statusCode: 200,
            success: true,
            message: 'Books retrive successfully',
            
            data: result,
          });
    }
)

export const booksController ={
    getAllBooks
}
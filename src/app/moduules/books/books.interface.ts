import { Model } from "mongoose"

export type IBooks = {
    title: string,
    author: string,
    genre: string,
    publicationData : string,
    image: string
}

export type IBooksfilters = {
    searchTerm?: string;
    author?: string,
    genre?:string,
    title?:string
}
export type BooksModel = Model<IBooks, Record<string, unknown>>
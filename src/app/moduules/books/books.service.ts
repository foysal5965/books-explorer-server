import { booksSearchableField } from "./books.constants";
import { IBooksfilters } from "./books.interface";
import { Books } from "./books.model";

const getAllBooks = async (filters: Partial<IBooksfilters>) => {
  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: booksSearchableField.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }
  const whereConditions =
  andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Books.find(whereConditions)
  
  return result
};

export const booksService = {
  getAllBooks,
};

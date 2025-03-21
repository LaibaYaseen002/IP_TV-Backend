import { GenreModel } from "../models/index.js";
import { generateToken } from "../utils/generateToken.js";

export const GenreService = {
  getAll: async () => {
    return GenreModel.find();
  },

  create: async (body) => {
    return GenreModel.create(body);
  },
  update: async (id, updatedData) => {
    return await GenreModel.findByIdAndUpdate(id, updatedData, { new: true });
  },
  delete: async (id) => {
    return await GenreModel.findByIdAndDelete(id);
  },
};

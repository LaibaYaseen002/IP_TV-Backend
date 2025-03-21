import { StreamModel } from "../models/index.js";
import { generateToken } from "../utils/generateToken.js";

export const StreamService = {
  getAll: async () => {
    return StreamModel.find();
  },

  create: async (body) => {
    return StreamModel.create(body);
  },

  update: async (id, updatedData) => {
    return await StreamModel.findByIdAndUpdate(id, updatedData, { new: true });
  },
  delete: async (id) => {
    return await StreamModel.findByIdAndDelete(id);
  },
};

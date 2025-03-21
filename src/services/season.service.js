import { SeasonModel } from "../models/index.js";
import { generateToken } from "../utils/generateToken.js";

export const SeasonService = {
  getAll: async () => {
    return SeasonModel.find();
  },

  create: async (body) => {
    return SeasonModel.create(body);
  },
  update: async (id, updatedData) => {
    return await SeasonModel.findByIdAndUpdate(id, updatedData, { new: true });
  },
  delete: async (id) => {
    return await SeasonModel.findByIdAndDelete(id);
  },
};

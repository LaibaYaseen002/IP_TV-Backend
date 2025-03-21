import { EpisodeModel } from "../models/index.js";
import { generateToken } from "../utils/generateToken.js";
export const EpisodeService = {
  getAll: async () => {
    return EpisodeModel.find();
  },

  create: async (body) => {
    return EpisodeModel.create(body);
  },
  update: async (id, updatedData) => {
    return await EpisodeModel.findByIdAndUpdate(id, updatedData, { new: true });
  },
  delete: async (id) => {
    return await EpisodeModel.findByIdAndDelete(id);
  },
};

import { SeriesModel } from "../models/index.js";

export const SeriesService = {
  getAll: async () => {
    return SeriesModel.find();
  },

  create: async (body) => {
    return SeriesModel.create(body);
  },
  update: async (id, updatedData) => {
    return await SeriesModel.findByIdAndUpdate(id, updatedData, { new: true });
  },
  delete: async (id) => {
    return await SeriesModel.findByIdAndDelete(id);
  },
};

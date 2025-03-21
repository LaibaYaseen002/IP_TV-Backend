import { UserModel } from "../models/index.js";
import { generateToken } from "../utils/generateToken.js";

export const UserService = {
  // get all users
  getAll: async () => {
    return await UserModel.find();
  },

  // regiteration service
  register: async (body) => {
    const user = await UserModel.create(body);
    return generateToken(user);
  },

  // login service
  login: async (body) => {
    const user = await UserModel.create(body);
    return generateToken(user);
  },
  update: async (id, updatedData) => {
    return await UserModel.findByIdAndUpdate(id, updatedData, { new: true });
  },

  delete: async (id) => {
    return await UserModel.findByIdAndDelete(id);
  },
};

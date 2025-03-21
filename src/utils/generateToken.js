import config from "../config/index.js";
import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  console.log("user generate token:", user);
  return jwt.sign({ id: user._id, email: user.email }, config.env.jwtSecret, {
    expiresIn: config.env.jwtexpiresIn,
  });
};

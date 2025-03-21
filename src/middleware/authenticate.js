import jwt, { decode } from "jsonwebtoken";
import { httpResponse } from "../utils/index.js";
import config from "../config/index.js";

export const authenticate = (req, res, next) => {
  const token = req.header("authorization");

  if (!token)
    return httpResponse.BAD_REQUEST(
      res,
      "Need token (JWT) to hit this API",
      "Access denied. No token provided."
    );

  const tokenParts = token.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return httpResponse.UNAUTHORIZED(
      res,
      "Invalid token format",
      "Token should be sent as 'Bearer <token>'"
    );
  }

  const bearerToken = tokenParts[1];

  try {
    req.user = jwt.verify(bearerToken, config.env.jwtSecret);
    req.user = decode;

    next();
  } catch (error) {
    return httpResponse.UNAUTHORIZED(
      res,
      "Token is not valid",
      "Invalid token."
    );
  }
};

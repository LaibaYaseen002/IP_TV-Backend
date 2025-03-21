import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { UserController } from "../controllers/index.js";

const router = express.Router();
router.get("/", UserController.getAll);
router.post(
  "/register",
  validate(UserValidationSchema.register),
  UserController.register
);
router.post(
  "/login",
  validate(UserValidationSchema.login),
  UserController.login
);

router.patch(
  "/:id",
  validate(UserValidationSchema.update),
  UserController.update
);
router.delete("/:id", UserController.delete);
export default router;

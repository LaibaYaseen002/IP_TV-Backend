import express from "express";
import { GenreValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { GenreController } from "../controllers/index.js";

const router = express.Router();

router.get("/", GenreController.getAll);

router.post(
  "/create",
  validate(GenreValidationSchema.create),
  GenreController.create
);

router.patch(
  "/:id",
  validate(GenreValidationSchema.update),
  GenreController.update
);
router.delete("/:id", GenreController.delete);

export default router;

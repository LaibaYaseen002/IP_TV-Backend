import express from "express";
import { SeriesValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { SeriesController } from "../controllers/index.js";

const router = express.Router();

router.get("/", SeriesController.getAll);

router.post(
  "/create",
  validate(SeriesValidationSchema.create),
  SeriesController.create
);
router.patch(
  "/:id",
  validate(SeriesValidationSchema.update),
  SeriesController.update
);

router.delete("/:id", SeriesController.delete);

export default router;

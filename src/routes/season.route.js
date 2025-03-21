import express from "express";
import { SeasonValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { SeasonController } from "../controllers/index.js";

const router = express.Router();

router.get("/", SeasonController.getAll);

router.post(
  "/create",
  validate(SeasonValidationSchema.create),
  SeasonController.create
);

router.patch(
  "/:id",
  validate(SeasonValidationSchema.update),
  SeasonController.update
);

router.delete("/:id", SeasonController.delete);

export default router;

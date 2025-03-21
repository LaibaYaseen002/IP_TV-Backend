import express from "express";
import { EpisodeValidationSchema } from "../validations/index.js";
import { validate } from "../middleware/index.js";
import { EpisodeController } from "../controllers/index.js";

const router = express.Router();

router.get("/", EpisodeController.getAll);

router.post(
  "/create",
  validate(EpisodeValidationSchema.create),
  EpisodeController.create
);
router.patch(
  "/:id",
  validate(EpisodeValidationSchema.update),
  EpisodeController.update
);

router.delete("/:id", EpisodeController.delete);

export default router;

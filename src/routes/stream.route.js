import express from "express";
import { StreamValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { StreamController } from "../controllers/index.js";

const router = express.Router();

router.get("/", StreamController.getAll);
router.post(
  "/create",
  validate(StreamValidationSchema.create),
  StreamController.create
);
router.patch(
  "/:id",
  validate(StreamValidationSchema.update),
  StreamController.update
);

router.delete("/:id", StreamController.delete);

export default router;

import express from "express";
import upload from "../middleware/multer.js"; // Import multer from multer.js
import { FileController } from "../controllers/index.js";
import { FileValidationSchema } from "../validations/file.validatiion.js";
import { validate } from "../middleware/index.js";

const router = express.Router();
router.get("/", FileController.getAll);
// Route to handle file upload
router.post("/upload", upload.single("file"), FileController.upload);

router.patch(
  "/:id",
  validate(FileValidationSchema.update),
  FileController.update
);

router.delete("/:id", FileController.delete);

export default router;

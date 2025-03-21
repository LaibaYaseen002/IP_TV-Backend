import mongoose from "mongoose";

const seriesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, maxlength: 100 },
    description: { type: String, maxlength: 500 },
    releaseDate: { type: Date },
  },
  { timestamps: true }
);

export const SeriesModel = mongoose.model("Series", seriesSchema);

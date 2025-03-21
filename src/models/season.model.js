import mongoose from "mongoose";

const seasonSchema = new mongoose.Schema(
  {
    seriesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Series",
      required: true,
    },
    seasonNumber: { type: Number, required: true },
    title: { type: String, required: true, maxlength: 100 },
  },
  { timestamps: true }
);

export const SeasonModel = mongoose.model("Season", seasonSchema);

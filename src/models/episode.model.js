import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema(
  {
    seasonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Season",
      required: true,
    },
    episodeNumber: { type: Number, required: true },
    title: { type: String, required: true, maxlength: 100 },
    seasonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Season",
      required: true,
    },
    seasonNumber: { type: Number, required: true },
    duration: { type: Number, required: true }, // duration in minutes
  },
  { timestamps: true }
);

export const EpisodeModel = mongoose.model("Episode", episodeSchema);

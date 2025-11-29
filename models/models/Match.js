import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema(
  {
    player1: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    player2: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    winner: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    duration: { type: Number, default: 0 }, // seconds
    player1Score: { type: Number, default: 0 },
    player2Score: { type: Number, default: 0 },

    status: {
      type: String,
      enum: ["pending", "active", "finished"],
      default: "pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Match", MatchSchema);

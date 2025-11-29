import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "Strength",
        "Cardio",
        "LITT",
        "HIIT",
        "Core",
        "Stretching",
        "Recovery"
      ],
      required: true
    },
    duration: { type: Number, required: true }, // minutes
    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner"
    },
    videoUrl: { type: String, required: true },
    thumbnailUrl: { type: String, default: "" },
    calories: { type: Number, default: 0 },
    equipment: { type: [String], default: [] }
  },
  { timestamps: true }
);

export default mongoose.model("Workout", WorkoutSchema);

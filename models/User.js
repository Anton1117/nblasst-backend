import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, default: "" },
    workoutsCompleted: { type: Number, default: 0 },
    totalMinutes: { type: Number, default: 0 },
    totalCalories: { type: Number, default: 0 },
    experience: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    country: { type: String, default: "" }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);

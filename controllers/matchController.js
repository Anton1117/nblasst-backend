import Match from "../models/match.js";

export const createMatch = async (req, res) => {
  try {
    const match = await Match.create({
      userId: req.body.userId,
      workoutType: req.body.workoutType,
      duration: req.body.duration,
      caloriesBurned: req.body.caloriesBurned,
      difficulty: req.body.difficulty,
    });

    res.status(201).json(match);
  } catch (error) {
    console.error("Match create error:", error);
    res.status(500).json({ error: "Failed to create match" });
  }
};

export const getUserMatches = async (req, res) => {
  try {
    const matches = await Match.find({ userId: req.params.id }).sort({ createdAt: -1 });
    res.json(matches);
  } catch (error) {
    console.error("Get matches error:", error);
    res.status(500).json({ error: "Failed to fetch matches" });
  }
};

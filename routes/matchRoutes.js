import express from "express";
import {
  startMatch,
  joinMatch,
  submitScore,
  getMatchStatus
} from "../controllers/matchController.js";

const router = express.Router();

// Create a new match
router.post("/start", startMatch);

// Join an existing match
router.post("/join", joinMatch);

// Submit the final score/time/points
router.post("/submit-score", submitScore);

// Check match status (opponent joined? match ready?)
router.get("/status/:matchId", getMatchStatus);

export default router;

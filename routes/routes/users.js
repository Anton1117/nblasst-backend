const express = require("express");
const router = express.Router();
const db = require("../server");

// Get a single user by ID
router.get("/:id", (req, res) => {
  const id = req.params.id;

  const user = db.prepare("SELECT * FROM users WHERE id = ?").get(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

// Update user profile (username, goal, level, etc.)
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { username, goal, fitness_level } = req.body;

  const stmt = db.prepare(
    "UPDATE users SET username = ?, goal = ?, fitness_level = ? WHERE id = ?"
  );

  stmt.run(username, goal, fitness_level, id);

  res.json({ message: "User updated successfully" });
});

module.exports = router;

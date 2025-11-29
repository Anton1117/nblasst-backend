const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../server");

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);

    const stmt = db.prepare(
      "INSERT INTO users (username, email, passwordHash) VALUES (?, ?, ?)"
    );
    stmt.run(username, email, hashed);

    res.json({ message: "Account created." });
  } catch (err) {
    res.status(400).json({ error: "Email already exists." });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET
  );

  res.json({ token });
});

module.exports = router;


// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const usersRouter = require("./routes/users");
const workoutsRouter = require("./routes/workouts");
const matchRouter = require("./routes/match");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ROUTES
app.use("/users", usersRouter);
app.use("/workouts", workoutsRouter);
app.use("/match", matchRouter);

// Root endpoint
app.get("/", (req, res) => {
  res.send("NBLASST backend is running!");
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

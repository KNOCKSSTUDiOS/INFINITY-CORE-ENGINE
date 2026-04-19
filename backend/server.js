// INFINITY-CORE-ENGINE · BACKEND SKELETON
// Node + Express server with auth, roles, and session cookies.

require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cookieParser());

// Simple in-memory job store (temporary)
const jobs = {};

// Auth routes
app.use("/auth", authRoutes);

// Protected example: jobs
const { authGuard } = require("./middleware/authGuard");

// Add job (ADMIN+)
app.post("/api/jobs", authGuard(["ADMIN", "CEO", "KING_KNOCKS"]), (req, res) => {
  const id = "JOB-" + Math.floor(Math.random() * 999999);
  jobs[id] = { id, status: "queued", progress: 0 };
  res.json(jobs[id]);
});

// Check job status (EMPLOYEE+)
app.get("/api/jobs/:id", authGuard(["EMPLOYEE", "ADMIN", "CEO", "KING_KNOCKS"]), (req, res) => {
  const job = jobs[req.params.id];
  if (!job) return res.status(404).json({ error: "Not found" });

  job.progress = Math.min(job.progress + 20, 100);
  job.status = job.progress >= 100 ? "complete" : "processing";

  res.json(job);
});

// Billing session (ADMIN+)
app.post(
  "/api/billing/session",
  authGuard(["ADMIN", "CEO", "KING_KNOCKS"]),
  (req, res) => {
    res.json({
      sessionId: "SESSION-" + Math.floor(Math.random() * 999999),
      amount: req.body.amount,
      status: "created",
    });
  }
);

// Client renders (EMPLOYEE+)
app.get(
  "/api/client/renders",
  authGuard(["EMPLOYEE", "ADMIN", "CEO", "KING_KNOCKS"]),
  (req, res) => {
    res.json([
      { id: "R1", status: "complete" },
      { id: "R2", status: "processing" },
    ]);
  }
);

app.listen(PORT, () => {
  console.log("INFINITY-CORE BACKEND RUNNING on port " + PORT);
});

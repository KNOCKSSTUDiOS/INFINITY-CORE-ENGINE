// AUTH ROUTES · INFINITY-CORE-ENGINE

const express = require("express");
const router = express.Router();
const { resolveRole, verifyPassword, ROLES } = require("../auth");

const SESSION_SECRET = process.env.SESSION_SECRET || "INFINITY-CORE-SECRET";

function createSessionCookie(payload) {
  const json = JSON.stringify(payload);
  const base = Buffer.from(json, "utf8").toString("base64");
  return base;
}

// Login
router.post("/login", (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ error: "Missing credentials" });
  }

  const role = resolveRole(username);

  if (!verifyPassword(role, password)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const session = {
    username,
    role,
    ts: Date.now(),
  };

  const cookieValue = createSessionCookie(session);

  res.cookie("ic_session", cookieValue, {
    httpOnly: true,
    secure: false, // set true behind HTTPS/proxy in production
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 4, // 4 hours
  });

  res.json({
    ok: true,
    role,
    username,
    superuser: role === ROLES.KING_KNOCKS,
  });
});

// Logout
router.post("/logout", (req, res) => {
  res.clearCookie("ic_session");
  res.json({ ok: true });
});

// Who am I
router.get("/me", (req, res) => {
  const raw = req.cookies && req.cookies.ic_session;
  if (!raw) return res.json({ user: null });

  try {
    const json = Buffer.from(raw, "base64").toString("utf8");
    const session = JSON.parse(json);
    res.json({ user: session });
  } catch {
    res.json({ user: null });
  }
});

module.exports = router;


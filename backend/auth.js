// AUTH CORE · INFINITY-CORE-ENGINE
// Env-based credentials + role resolution.

const crypto = require("crypto");

const ROLES = {
  EMPLOYEE: "EMPLOYEE",
  ADMIN: "ADMIN",
  CEO: "CEO",
  KING_KNOCKS: "KING_KNOCKS",
};

function hash(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

// Pre-hashed env passwords (computed at runtime)
const PASSWORD_MAP = {
  [ROLES.EMPLOYEE]: process.env.EMPLOYEE_PASS ? hash(process.env.EMPLOYEE_PASS) : null,
  [ROLES.ADMIN]: process.env.ADMIN_PASS ? hash(process.env.ADMIN_PASS) : null,
  [ROLES.CEO]: process.env.CEO_PASS ? hash(process.env.CEO_PASS) : null,
  [ROLES.KING_KNOCKS]: process.env.KING_PASS ? hash(process.env.KING_PASS) : null,
};

function resolveRole(username) {
  const u = (username || "").toLowerCase().trim();

  if (u === "king knocks" || u === "king_knocks" || u === "king") {
    return ROLES.KING_KNOCKS;
  }

  if (u.includes("ceo")) return ROLES.CEO;
  if (u.includes("admin")) return ROLES.ADMIN;
  return ROLES.EMPLOYEE;
}

function verifyPassword(role, password) {
  const stored = PASSWORD_MAP[role];
  if (!stored) return false;
  const incoming = hash(password || "");
  return stored === incoming;
}

module.exports = {
  ROLES,
  resolveRole,
  verifyPassword,
};


import express from "express";
import { requireAuth } from "../auth/authEngine.js";

export const securityRouter = express.Router();

// basic token validation endpoint
securityRouter.get("/validate", requireAuth, (req, res) => {
    return res.json({
        ok: true,
        user: req.user,
        timestamp: Date.now()
    });
});

// audit log placeholder
securityRouter.post("/audit", requireAuth, (req, res) => {
    const { action, meta } = req.body;

    if (!action) {
        return res.status(400).json({ error: "MISSING_ACTION" });
    }

    return res.json({
        ok: true,
        logged: {
            action,
            meta: meta || {},
            userId: req.user.id,
            at: Date.now()
        }
    });
});

// security heartbeat
securityRouter.get("/heartbeat", (req, res) => {
    return res.json({
        ok: true,
        security: "ONLINE",
        at: Date.now()
    });
});

if (typeof module !== "undefined" && module.exports) {
    module.exports = { securityRouter };
}

import express from "express";
import { requireAuth } from "../auth/authEngine.js";
import { Database } from "../db/index.js";

export const adminRouter = express.Router();

// simple role‑check middleware
function requireAdmin(req, res, next) {
    if (!req.user || req.user.role !== "admin") {
        return res.status(403).json({ error: "FORBIDDEN" });
    }
    next();
}

// list all users (dev placeholder)
adminRouter.get("/users", requireAuth, requireAdmin, (req, res) => {
    try {
        const users = [];
        if (Database.users) {
            for (const u of Database.users.values()) users.push(u);
        }
        return res.json({ ok: true, users });
    } catch (err) {
        return res.status(500).json({ error: "ADMIN_LIST_USERS_ERROR" });
    }
});

// list all subscriptions (dev placeholder)
adminRouter.get("/subscriptions", requireAuth, requireAdmin, (req, res) => {
    try {
        const subs = [];
        if (Database.subscriptions) {
            for (const s of Database.subscriptions.values()) subs.push(s);
        }
        return res.json({ ok: true, subscriptions: subs });
    } catch (err) {
        return res.status(500).json({ error: "ADMIN_LIST_SUBSCRIPTIONS_ERROR" });
    }
});

// force deactivate subscription
adminRouter.post(
    "/subscriptions/deactivate",
    requireAuth,
    requireAdmin,
    (req, res) => {
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ error: "MISSING_USER_ID" });
        }

        try {
            Database.setSubscription(userId, {
                userId,
                active: false,
                updatedAt: Date.now()
            });

            return res.json({
                ok: true,
                message: "SUBSCRIPTION_DEACTIVATED",
                userId
            });
        } catch (err) {
            return res.status(500).json({ error: "ADMIN_DEACTIVATE_ERROR" });
        }
    }
);

if (typeof module !== "undefined" && module.exports) {
    module.exports = { adminRouter };
}

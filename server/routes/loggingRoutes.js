import express from "express";

export const loggingRouter = express.Router();

// write log entry
loggingRouter.post("/write", (req, res) => {
    const { level = "info", message = "", meta = {} } = req.body;

    if (!message) {
        return res.status(400).json({ error: "MISSING_MESSAGE" });
    }

    return res.json({
        ok: true,
        logged: {
            level,
            message,
            meta,
            at: Date.now()
        }
    });
});

// retrieve logs placeholder
loggingRouter.get("/recent", (req, res) => {
    return res.json({
        ok: true,
        logs: [],
        note: "Real log storage not yet implemented"
    });
});

// health check
loggingRouter.get("/health", (req, res) => {
    return res.json({
        ok: true,
        logging: "ONLINE",
        at: Date.now()
    });
});

if (typeof module !== "undefined" && module.exports) {
    module.exports = { loggingRouter };
}

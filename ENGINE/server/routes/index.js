import express from "express";
import { authRouter } from "../auth/authRoutes.js";
import { stripeWebhookRouter } from "../billing/stripeWebhook.js";

export const mainRouter = express.Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/", stripeWebhookRouter);

if (typeof module !== "undefined" && module.exports) {
    module.exports = { mainRouter };
}

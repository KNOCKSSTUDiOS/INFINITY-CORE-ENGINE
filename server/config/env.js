import dotenv from "dotenv";

dotenv.config();

export const Env = {
    PORT: process.env.PORT || 8080,
    JWT_SECRET: process.env.JWT_SECRET || "CHANGE_ME",
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || "",
    DB_URL: process.env.DB_URL || ""
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { Env };
}

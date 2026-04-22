// placeholder for real Stripe integration
// wire your STRIPE_SECRET_KEY in env and replace this with real SDK calls

export const BillingEngine = {
    id: "billing-engine-1",
    name: "BILLING-ENGINE-L",
    version: "1.0.0",

    async hasActiveSubscription(userId) {
        // TODO: check your DB or Stripe customer/subscription state
        // return true if user has active paid plan
        return true;
    }
};

export async function requireActiveSubscription(req, res, next) {
    if (!req.user || !req.user.id) {
        return res.status(401).json({ error: "UNAUTHORIZED" });
    }

    const ok = await BillingEngine.hasActiveSubscription(req.user.id);
    if (!ok) {
        return res.status(402).json({ error: "PAYMENT_REQUIRED" });
    }

    next();
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { BillingEngine, requireActiveSubscription };
}

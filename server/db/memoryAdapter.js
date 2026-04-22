// lightweight in‑memory adapter for development
// production swaps this with dbAdapter.js

export const MemoryDB = {
    users: new Map(),
    subscriptions: new Map(),

    createUser(user) {
        this.users.set(user.id, user);
        return user;
    },

    getUser(id) {
        return this.users.get(id) || null;
    },

    setSubscription(userId, sub) {
        this.subscriptions.set(userId, sub);
        return sub;
    },

    getSubscription(userId) {
        return this.subscriptions.get(userId) || { active: false };
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { MemoryDB };
}// lightweight in‑memory adapter for development
// production swaps this with dbAdapter.js

export const MemoryDB = {
    users: new Map(),
    subscriptions: new Map(),

    createUser(user) {
        this.users.set(user.id, user);
        return user;
    },

    getUser(id) {
        return this.users.get(id) || null;
    },

    setSubscription(userId, sub) {
        this.subscriptions.set(userId, sub);
        return sub;
    },

    getSubscription(userId) {
        return this.subscriptions.get(userId) || { active: false };
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { MemoryDB };
}

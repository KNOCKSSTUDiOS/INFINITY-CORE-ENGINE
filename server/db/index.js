// unified DB selector
// swap between MemoryDB (dev) and DB (production)

import { MemoryDB } from "./memoryAdapter.js";
import { DB } from "./dbAdapter.js";
import { Env } from "../config/env.js";

let ActiveDB = MemoryDB;

// if DB_URL is provided, switch to real DB adapter
if (Env.DB_URL && Env.DB_URL.trim() !== "") {
    ActiveDB = DB;
}

export const Database = {
    async connect() {
        return ActiveDB.connect ? ActiveDB.connect() : true;
    },

    async disconnect() {
        return ActiveDB.disconnect ? ActiveDB.disconnect() : true;
    },

    async query(q, params = []) {
        if (!ActiveDB.query) {
            return { rows: [], ok: true };
        }
        return ActiveDB.query(q, params);
    },

    // dev‑friendly helpers
    createUser: (...args) =>
        ActiveDB.createUser ? ActiveDB.createUser(...args) : null,

    getUser: (...args) =>
        ActiveDB.getUser ? ActiveDB.getUser(...args) : null,

    setSubscription: (...args) =>
        ActiveDB.setSubscription ? ActiveDB.setSubscription(...args) : null,

    getSubscription: (...args) =>
        ActiveDB.getSubscription ? ActiveDB.getSubscription(...args) : null
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { Database };
}

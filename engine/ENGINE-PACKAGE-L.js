import { EngineDone } from "./ENGINE-DONE-L.js";

export const EnginePackage = {
    id: "engine-package-global-1",
    name: "ENGINE-PACKAGE-L",
    version: "1.0.0",

    build(engine = {}) {
        const finalized = EngineDone.finalize(engine);

        return {
            id: finalized.id || "infinity-core-engine",
            name: finalized.name || "INFINITY-CORE-ENGINE",
            version: finalized.version || "1.0.0",
            status: finalized.status || {},
            engine: finalized
        };
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { EnginePackage };
}

import { cinemaMp4Mount } from "../../server/cinemaMp4Mount.js";

export const cinemaMp4Boot = {
    id: "engine-boot-cinema-mp4-1",
    name: "ENGINE-BOOT-CINEMA-MP4",
    version: "1.0.0",

    init(app) {
        cinemaMp4Mount.register(app);
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { cinemaMp4Boot };
}

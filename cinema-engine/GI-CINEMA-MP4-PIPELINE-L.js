import { GICinemaApp } from "./GI-CINEMA-APP-L.js";

export const GICinemaMp4Pipeline = {
    id: "cinema-mp4-pipeline-1",
    name: "GI-CINEMA-MP4-PIPELINE-L",
    version: "1.0.0",

    buildJob(options = {}) {
        const {
            packageType = "fullmovie",
            resolution = "1920x1080",
            fps = 24,
            audio = true,
            outputName = "cinema_output.mp4"
        } = options;

        const pkg = GICinemaApp.generate(packageType);

        return {
            id: `mp4-${Date.now()}`,
            type: "mp4-render",
            meta: {
                packageType,
                resolution,
                fps,
                audio,
                outputName
            },
            payload: pkg,
            status: "READY_FOR_RENDER"
        };
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { GICinemaMp4Pipeline };
}

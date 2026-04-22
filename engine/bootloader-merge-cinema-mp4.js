import { EngineBootCinemaMp4 } from "./boot/index-cinema-mp4.js";

export const EngineBootloaderMergeCinemaMp4 = {
    id: "engine-bootloader-merge-cinema-mp4-1",
    name: "ENGINE-BOOTLOADER-MERGE-CINEMA-MP4",
    version: "1.0.0",

    merge(bootloader) {
        bootloader.modules = bootloader.modules || [];
        bootloader.modules.push(EngineBootCinemaMp4);
        return bootloader;
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = { EngineBootloaderMergeCinemaMp4 };
}

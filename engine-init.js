/*
  INFINITY‑CORE‑ENGINE • MASTER INITIALIZER
  ------------------------------------------------
  This file boots the entire engine stack in the correct order.
  It ensures:
    • All subsystems load cleanly
    • No race conditions
    • Proper sequencing of:
        - Network Handshake
        - Engine Bridge
        - Visual Protocol
        - Reality‑Core
        - Ultra Instinct
        - DOM Bindings
        - Sync Master
*/

window.ENGINE_INIT = {
  initialized: false,

  async boot() {
    if (this.initialized) return;
    this.initialized = true;

    this.log("BOOT: INITIATING ENGINE SEQUENCE");

    // 1. Network handshake
    if (window.ENGINE_NETWORK_HANDSHAKE) {
      this.log("BOOT: HANDSHAKE");
      window.ENGINE_NETWORK_HANDSHAKE.init();
    }

    // 2. Engine bridge
    if (window.INFINITY_CORE_ENGINE) {
      this.log("BOOT: ENGINE BRIDGE");
      window.INFINITY_CORE_ENGINE.updateStatus("ENGINE-BOOT");
    }

    // 3. Visual protocol
    if (window.ENGINE_VISUAL_PROTOCOL) {
      this.log("BOOT: VISUAL PROTOCOL");
      window.ENGINE_VISUAL_PROTOCOL.applyState("FORM-R-IDLE");
    }

    // 4. Reality‑Core
    if (window.REALITY_CORE) {
      this.log("BOOT: REALITY-CORE");
      window.REALITY_CORE.applyState("RC-IDLE");
    }

    // 5. Ultra Instinct
    if (window.ULTRA_INSTINCT) {
      this.log("BOOT: ULTRA INSTINCT");
      window.ULTRA_INSTINCT.applyState("UI-DORMANT");
    }

    // 6. DOM Bindings
    if (window.ENGINE_DOM_BINDINGS) {
      this.log("BOOT: DOM BINDINGS");
      window.ENGINE_DOM_BINDINGS.init();
    }

    // 7. Sync Master
    if (window.ENGINE_SYNC_MASTER) {
      this.log("BOOT: SYNC MASTER");
      window.ENGINE_SYNC_MASTER.init();
    }

    this.log("BOOT: ENGINE ONLINE");
  },

  log(msg) {
    console.log(`[INFINITY-CORE-ENGINE] ${msg}`);
  }
};

// Auto‑boot on DOM ready
window.addEventListener("DOMContentLoaded", () => {
  window.ENGINE_INIT.boot();
});

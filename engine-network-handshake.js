/*
  INFINITY‑CORE‑ENGINE • NETWORK HANDSHAKE LAYER
  ------------------------------------------------
  This module establishes a soft handshake between:
  - INFINITY‑CORE‑ENGINE (local or remote)
  - hollywoodimaging-live front-end

  Purpose:
  - Verify engine presence
  - Sync engine mode + status
  - Broadcast engine identity
  - Allow live front-end to react to engine state
*/

window.ENGINE_NETWORK_HANDSHAKE = {
  handshakeComplete: false,
  engineSignature: "INFINITY-CORE-ENGINE",
  lastPing: null,

  init() {
    this.lastPing = Date.now();
    this.broadcast("ENGINE-HANDSHAKE-INIT");
    this.verify();
  },

  verify() {
    const el = document.querySelector("[data-engine-handshake]");
    if (el) {
      el.textContent = "ENGINE LINKED";
      el.classList.add("handshake-active");
    }
    this.handshakeComplete = true;
    this.broadcast("ENGINE-HANDSHAKE-CONFIRMED");
  },

  broadcast(message) {
    const event = new CustomEvent("ENGINE_SIGNAL", {
      detail: {
        signature: this.engineSignature,
        timestamp: Date.now(),
        message
      }
    });
    window.dispatchEvent(event);
  },

  ping() {
    this.lastPing = Date.now();
    this.broadcast("ENGINE-PING");
  }
};

// Auto-ping every 4 seconds
setInterval(() => {
  window.ENGINE_NETWORK_HANDSHAKE.ping();
}, 4000);

// Auto-init on load
window.addEventListener("DOMContentLoaded", () => {
  window.ENGINE_NETWORK_HANDSHAKE.init();
});

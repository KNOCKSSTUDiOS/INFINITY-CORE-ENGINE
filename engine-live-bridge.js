/*
  INFINITY‑CORE‑ENGINE → LIVE NETWORK BRIDGE
  ------------------------------------------------
  This file allows the engine to push:
  - status updates
  - visual protocol states
  - engine metrics
  - live mode flags
  directly into the hollywoodimaging-live front-end.
*/

window.INFINITY_CORE_ENGINE = {
  status: "IDLE",
  mode: "FORM-R",
  metrics: {
    load: 0,
    threads: 1,
    visualState: "STATIC"
  },

  updateStatus(newStatus) {
    this.status = newStatus;
    const el = document.querySelector("[data-engine-status]");
    if (el) el.textContent = newStatus;
  },

  updateMode(newMode) {
    this.mode = newMode;
    const el = document.querySelector("[data-engine-mode]");
    if (el) el.textContent = newMode;
  },

  updateMetrics(newMetrics) {
    this.metrics = { ...this.metrics, ...newMetrics };
    const el = document.querySelector("[data-engine-metrics]");
    if (el) el.textContent = JSON.stringify(this.metrics, null, 2);
  },

  pulse() {
    // heartbeat for UI animation or live indicators
    const el = document.querySelector("[data-engine-pulse]");
    if (el) {
      el.classList.remove("pulse");
      void el.offsetWidth;
      el.classList.add("pulse");
    }
  }
};

// Auto-pulse every 3 seconds
setInterval(() => {
  window.INFINITY_CORE_ENGINE.pulse();
}, 3000);

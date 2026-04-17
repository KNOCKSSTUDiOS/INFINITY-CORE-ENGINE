/*
  INFINITY‑CORE‑ENGINE • VISUAL PROTOCOL LAYER
  ------------------------------------------------
  This module controls:
  - FORM‑R visual states
  - Reality‑Core transitions
  - Engine‑driven UI effects
  - Protocol‑based animations
*/

window.ENGINE_VISUAL_PROTOCOL = {
  state: "FORM-R-IDLE",
  transitions: {
    "FORM-R-IDLE": "FORM-R-PULSE",
    "FORM-R-PULSE": "FORM-R-ASCEND",
    "FORM-R-ASCEND": "FORM-R-IDLE"
  },

  applyState(newState) {
    this.state = newState;

    const el = document.querySelector("[data-visual-protocol]");
    if (el) {
      el.setAttribute("data-visual-protocol", newState);
      el.classList.remove("vp-animate");
      void el.offsetWidth;
      el.classList.add("vp-animate");
    }
  },

  next() {
    const nextState = this.transitions[this.state] || "FORM-R-IDLE";
    this.applyState(nextState);
  },

  pulse() {
    const el = document.querySelector("[data-visual-pulse]");
    if (!el) return;

    el.classList.remove("vp-pulse");
    void el.offsetWidth;
    el.classList.add("vp-pulse");
  }
};

// Auto-cycle visual protocol every 5 seconds
setInterval(() => {
  window.ENGINE_VISUAL_PROTOCOL.next();
  window.ENGINE_VISUAL_PROTOCOL.pulse();
}, 5000);

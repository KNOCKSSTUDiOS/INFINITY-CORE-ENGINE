/*
  INFINITY‑CORE‑ENGINE • REALITY‑CORE LAYER
  ------------------------------------------------
  This module governs:
  - Reality‑Core state machine
  - Dimensional blending logic
  - Engine → UI synchronization
  - Core‑state broadcasting for front-end effects

  States:
    • RC-IDLE
    • RC-WARM
    • RC-CHARGE
    • RC-OVERDRIVE
*/

window.REALITY_CORE = {
  state: "RC-IDLE",

  states: ["RC-IDLE", "RC-WARM", "RC-CHARGE", "RC-OVERDRIVE"],

  transitions: {
    "RC-IDLE": "RC-WARM",
    "RC-WARM": "RC-CHARGE",
    "RC-CHARGE": "RC-OVERDRIVE",
    "RC-OVERDRIVE": "RC-IDLE"
  },

  applyState(newState) {
    this.state = newState;

    const el = document.querySelector("[data-reality-core]");
    if (el) {
      el.setAttribute("data-reality-core", newState);
      el.classList.remove("rc-animate");
      void el.offsetWidth;
      el.classList.add("rc-animate");
    }

    this.broadcast(newState);
  },

  next() {
    const nextState = this.transitions[this.state] || "RC-IDLE";
    this.applyState(nextState);
  },

  broadcast(state) {
    const event = new CustomEvent("REALITY_CORE_SIGNAL", {
      detail: {
        state,
        timestamp: Date.now()
      }
    });
    window.dispatchEvent(event);
  },

  ignite() {
    this.applyState("RC-WARM");
  },

  overload() {
    this.applyState("RC-OVERDRIVE");
  }
};

// Auto-cycle Reality‑Core every 7 seconds
setInterval(() => {
  window.REALITY_CORE.next();
}, 7000);

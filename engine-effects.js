/*
  INFINITY‑CORE‑ENGINE • EFFECTS LAYER
  ------------------------------------------------
  Handles:
    • Particle systems
    • Shockwave effects
    • Pulse rings
    • Dimensional distortion
    • Hyperstate visual amplifiers
    • Audio-reactive bursts

  This layer is purely visual and hooks into:
    • ENGINE_RENDERER
    • REALITY_CORE
    • ULTRA_INSTINCT
    • ENGINE_HYPERSTATE
*/

window.ENGINE_EFFECTS = {
  particles: [],
  maxParticles: 150,

  init() {
    this.bindEvents();
    this.spawnLoop();
  },

  bindEvents() {
    window.addEventListener("REALITY_CORE_SIGNAL", (e) => {
      if (e.detail.state === "RC-OVERDRIVE") this.shockwave();
    });

    window.addEventListener("ULTRA_INSTINCT_SIGNAL", (e) => {
      if (e.detail.state === "UI-TRANSCENDENT") this.pulseRing();
    });

    window.addEventListener("HYPERSTATE_SIGNAL", (e) => {
      if (e.detail.state === "HS-OMNI") this.distortionBurst();
    });

    window.addEventListener("AUDIO_REACTOR_INTENSITY", (e) => {
      if (e.detail.intensity > 180) this.audioBurst();
    });
  },

  spawnLoop() {
    setInterval(() => {
      if (this.particles.length < this.maxParticles) {
        this.spawnParticle();
      }
    }, 120);
  },

  spawnParticle() {
    const el = document.createElement("div");
    el.className = "engine-particle";
    el.style.left = Math.random() * 100 + "%";
    el.style.top = Math.random() * 100 + "%";
    el.style.opacity = 0.2 + Math.random() * 0.8;

    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 1500);

    this.particles.push(el);
  },

  shockwave() {
    const el = document.createElement("div");
    el.className = "engine-shockwave";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  },

  pulseRing() {
    const el = document.createElement("div");
    el.className = "engine-pulse-ring";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  },

  distortionBurst() {
    const el = document.createElement("div");
    el.className = "engine-distortion";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
  },

  audioBurst() {
    const el = document.createElement("div");
    el.className = "engine-audio-burst";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 700);
  }
};

// Auto‑init
window.addEventListener("DOMContentLoaded", () => {
  window.ENGINE_EFFECTS.init();
});

/*
  INFINITY‑CORE‑ENGINE • AUDIO REACTOR LAYER
  ------------------------------------------------
  This module reacts to audio input and drives:
    • Visual Protocol intensification
    • Reality‑Core charge levels
    • Ultra Instinct activation thresholds
    • UI pulse effects

  Works with:
    • Microphone input
    • Audio elements
    • Live stream audio (if routed)
*/

window.ENGINE_AUDIO_REACTOR = {
  audioContext: null,
  analyser: null,
  dataArray: null,
  active: false,

  async init() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const source = this.audioContext.createMediaStreamSource(stream);

      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;

      const bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(bufferLength);

      source.connect(this.analyser);

      this.active = true;
      this.loop();
    } catch (err) {
      console.warn("AUDIO REACTOR ERROR:", err);
    }
  },

  loop() {
    if (!this.active) return;

    requestAnimationFrame(() => this.loop());

    this.analyser.getByteFrequencyData(this.dataArray);

    const avg = this.dataArray.reduce((a, b) => a + b, 0) / this.dataArray.length;

    // Drive subsystems based on audio intensity
    if (avg > 180 && window.ULTRA_INSTINCT) {
      window.ULTRA_INSTINCT.transcend();
    } else if (avg > 140 && window.REALITY_CORE) {
      window.REALITY_CORE.overload();
    } else if (avg > 100 && window.ENGINE_VISUAL_PROTOCOL) {
      window.ENGINE_VISUAL_PROTOCOL.next();
    }

    // UI pulse
    const el = document.querySelector("[data-audio-reactor]");
    if (el) {
      el.style.opacity = Math.min(1, avg / 200);
    }
  }
};

// Auto‑init on user gesture
window.addEventListener("click", () => {
  if (!window.ENGINE_AUDIO_REACTOR.active) {
    window.ENGINE_AUDIO_REACTOR.init();
  }
});

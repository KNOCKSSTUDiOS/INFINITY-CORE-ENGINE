/*
  INFINITY‑CORE‑ENGINE • DOM BINDINGS LAYER
  ------------------------------------------------
  This module binds engine states directly to DOM elements.
  It allows:
    • Live UI reflection of engine state
    • Automatic updates when engine subsystems change
    • Zero‑config binding via data‑attributes

  Supported bindings:
    data-engine-status
    data-engine-mode
    data-engine-metrics
    data-visual-protocol
    data-reality-core
    data-ultra-instinct
*/

window.ENGINE_DOM_BINDINGS = {
  init() {
    this.bindEngineBridge();
    this.bindVisualProtocol();
    this.bindRealityCore();
    this.bindUltraInstinct();
    this.bindSyncMaster();
  },

  bindEngineBridge() {
    window.addEventListener("ENGINE_SIGNAL", (e) => {
      const { message } = e.detail;
      const el = document.querySelector("[data-engine-status]");
      if (el) el.text

// INSTINCT ENGINE · INFINITY-CORE-ENGINE
// Default quick‑reaction layer. Handles instant presets + auto‑responses.

(function () {
  const statusText = document.getElementById("engineStatusText");

  function instinctPulse() {
    if (!statusText) return;
    statusText.textContent = "INSTINCT MODE · ACTIVE";
  }

  function autoHint() {
    console.log("%cINSTINCT ENGINE READY", "color:#ff4b9a;font-weight:bold;");
  }

  document.addEventListener("DOMContentLoaded", () => {
    instinctPulse();
    autoHint();
  });
})();


// CREDITS ENGINE · INFINITY-CORE-ENGINE
// Local credit tracking + deduction simulation.
// Backend will replace this with real Stripe + database logic.

(function () {
  const statusText = document.getElementById("engineStatusText");

  let credits = 10; // Local simulation credits

  function log(msg) {
    console.log(
      "%cCREDITS · " + msg,
      "color:#4be3ff;font-weight:bold;font-size:12px;"
    );
  }

  function updateStatus() {
    if (!statusText) return;
    statusText.textContent = `CREDITS · ${credits} REMAINING`;
  }

  function getCredits() {
    return credits;
  }

  function addCredits(amount) {
    credits += amount;
    log("Added credits: " + amount);
    updateStatus();
  }

  function deductCredits(amount) {
    if (credits < amount) {
      log("Not enough credits.");
      return false;
    }
    credits -= amount;
    log("Deducted credits: " + amount);
    updateStatus();
    return true;
  }

  // Demo: auto‑deduct a credit every few seconds
  function simulateCreditDrain() {
    setInterval(() => {
      if (credits > 0) {
        deductCredits(1);
      }
    }, 6000);
  }

  // Expose globally
  window.INFINITY_CREDITS = {
    getCredits,
    addCredits,
    deductCredits,
  };

  document.addEventListener("DOMContentLoaded", () => {
    log("Credits Engine Ready");
    updateStatus();
    simulateCreditDrain();
  });
})();


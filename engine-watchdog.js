/* ============================================================
   INFINITY-CORE-ENGINE // WATCHDOG MODULE
   Perimeter Monitor • System Heartbeat • Intrusion Flags
   ============================================================ */

const ICE_WATCHDOG = {
  heartbeatRate: 1200, // ms
  perimeterStatus: "SECURE",
  lastPulse: Date.now(),

  init() {
    this.startHeartbeat();
    this.startPerimeterScan();
    this.log("WATCHDOG ONLINE // DEPUTY AT POST");
  },

  startHeartbeat() {
    setInterval(() => {
      this.lastPulse = Date.now();
      this.updatePulseUI();
    }, this.heartbeatRate);
  },

  updatePulseUI() {
    const pulse = document.querySelector(".cmd-pulse");
    if (pulse) {
      pulse.style.transform = `scale(${0.7 + Math.random() * 0.6})`;
      pulse.style.opacity = `${0.5 + Math.random() * 0.5}`;
    }
  },

  startPerimeterScan() {
    setInterval(() => {
      this.scanForAnomalies();
    }, 3000);
  },

  scanForAnomalies() {
    // Placeholder for future engine logic
    const anomalyDetected = false;

    if (anomalyDetected) {
      this.perimeterStatus = "ALERT";
      this.triggerAlert();
    } else {
      this.perimeterStatus = "SECURE";
    }

    this.updateStatusUI();
  },

  updateStatusUI() {
    const status = document.querySelector(".cmd-status");
    if (!status) return;

    if (this.perimeterStatus === "SECURE") {
      status.textContent = "ONLINE";
      status.style.color = "#ffcc66";
    } else {
      status.textContent = "ALERT";
      status.style.color = "#ff4444";
    }
  },

  triggerAlert() {
    document.body.classList.add("ice-alert");
    setTimeout(() => {
      document.body.classList.remove("ice-alert");
    }, 1200);
  },

  log(msg) {
    console.log(`[WATCHDOG] ${msg}`);
  }
};

document.addEventListener("DOMContentLoaded", () => ICE_WATCHDOG.init());

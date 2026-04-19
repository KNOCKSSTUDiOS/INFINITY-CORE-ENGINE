// SENTINEL CORE · INFINITY-CORE-ENGINE
// Handles mode switching, toast, and basic engine state.

(function () {
  const statusText = document.getElementById("engineStatusText");
  const phaseText = document.getElementById("enginePhase");
  const toggles = document.querySelectorAll(".ic-toggle");
  const toast = document.getElementById("icToast");
  const btnStart = document.getElementById("btnStartEngine");
  const btnCopyDomain = document.getElementById("btnCopyDomain");
  const yearSpan = document.getElementById("icYear");

  const modeMap = {
    instinct: "SENTINEL · INSTINCT MODE",
    spirit: "SENTINEL · SPIRIT MODE",
    war: "SENTINEL · WAR ROOM MODE",
    god: "SENTINEL · GOD LEVEL MODE",
  };

  function setYear() {
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  }

  function showToast(message) {
    if (!toast) return;
    toast.innerHTML = "";
    const span = document.createElement("span");
    span.textContent = "ENGINE · ";
    toast.appendChild(span);
    toast.appendChild(document.createTextNode(message));
    toast.classList.remove("ic-toast-show");
    void toast.offsetWidth;
    toast.classList.add("ic-toast-show");
  }

  function setMode(mode) {
    if (phaseText) {
      phaseText.textContent = modeMap[mode] || "SENTINEL · ACTIVE";
    }
    showToast("Mode switched to " + (modeMap[mode] || "ACTIVE"));
  }

  function bindToggles() {
    toggles.forEach((btn) => {
      btn.addEventListener("click", () => {
        toggles.forEach((b) => b.classList.remove("ic-toggle-active"));
        btn.classList.add("ic-toggle-active");
        const mode = btn.getAttribute("data-mode");
        setMode(mode);
      });
    });
  }

  function bindStart() {
    if (!btnStart) return;
    btnStart.addEventListener("click", () => {
      if (statusText) statusText.textContent = "RUNNING · FULL PRODUCTION";
      showToast("Engine engaged. Wire your backend to start billing.");
    });
  }

  function bindCopyDomain() {
    if (!btnCopyDomain) return;
    btnCopyDomain.addEventListener("click", async () => {
      const domain = "hollywoodimaging.studio";
      try {
        await navigator.clipboard.writeText(domain);
        showToast("Domain copied: " + domain);
      } catch (e) {
        showToast("Copy failed. Type it: hollywoodimaging.studio");
      }
    });
  }

  function init() {
    setYear();
    bindToggles();
    bindStart();
    bindCopyDomain();
  }

  document.addEventListener("DOMContentLoaded", init);
})();


// SYSTEM EVENTS · INFINITY-CORE-ENGINE
// Global event bus + dispatch layer. Modules can subscribe and emit.

(function () {
  const listeners = {};

  function log(msg) {
    console.log(
      "%cEVENT BUS · " + msg,
      "color:#ff8a4b;font-weight:bold;font-size:12px;"
    );
  }

  // Subscribe to event
  function on(event, handler) {
    if (!listeners[event]) listeners[event] = [];
    listeners[event].push(handler);
    log("Subscribed to: " + event);
  }

  // Emit event
  function emit(event, data) {
    log("Emitting: " + event);
    if (!listeners[event]) return;
    for (const handler of listeners[event]) {
      try {
        handler(data);
      } catch (err) {
        console.error("Event handler error:", err);
      }
    }
  }

  // Remove listener
  function off(event, handler) {
    if (!listeners[event]) return;
    listeners[event] = listeners[event].filter((h) => h !== handler);
    log("Unsubscribed from: " + event);
  }

  // Expose globally
  window.INFINITY_EVENTS = {
    on,
    emit,
    off,
  };

  document.addEventListener("DOMContentLoaded", () => {
    log("Event Bus Ready");
  });
})();

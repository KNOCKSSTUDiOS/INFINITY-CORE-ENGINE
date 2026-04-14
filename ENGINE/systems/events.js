export const events = {
  listeners: {},

  init() {
    this.listeners = {};
  },

  on(event, handler) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(handler);
  },

  off(event, handler) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(h => h !== handler);
  },

  emit(event, data) {
    if (!this.listeners[event]) return;
    for (const handler of this.listeners[event]) {
      handler(data);
    }
  },

  update(delta) {
  }
};

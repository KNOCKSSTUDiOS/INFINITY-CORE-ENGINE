export const network = {
  online: false,
  latency: 0,
  lastPing: 0,

  connect() {
    this.online = true;
    this.lastPing = performance.now();
  },

  disconnect() {
    this.online = false;
  },

  ping() {
    const now = performance.now();
    this.latency = now - this.lastPing;
    this.lastPing = now;
  },

  update(delta) {
  }
};

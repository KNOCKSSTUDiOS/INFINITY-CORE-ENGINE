export const telemetry = {
  events: [],

  log(type, data) {
    this.events.push({
      type,
      data,
      time: Date.now()
    });
  },

  flush(sendFn) {
    if (this.events.length === 0) return;
    const batch = this.events.slice();
    this.events = [];
    sendFn(batch);
  },

  update(delta) {
  }
};

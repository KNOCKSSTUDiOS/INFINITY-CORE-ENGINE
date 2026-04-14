export const quantum = {
  channels: {},

  open(id) {
    this.channels[id] = { state: Math.random() };
  },

  collapse(id) {
    if (!this.channels[id]) return null;
    const v = this.channels[id].state > 0.5 ? 1 : 0;
    delete this.channels[id];
    return v;
  },

  entangle(a, b) {
    this.channels[a] = { state: 0.5 };
    this.channels[b] = this.channels[a];
  },

  update(delta) {
  }
};

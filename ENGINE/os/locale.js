export const locale = {
  current: "en-US",
  packs: {},

  setLocale(loc) {
    this.current = loc;
  },

  addPack(loc, data) {
    this.packs[loc] = data;
  },

  t(key) {
    const pack = this.packs[this.current] || {};
    return pack[key] || key;
  },

  update(delta) {
  }
};

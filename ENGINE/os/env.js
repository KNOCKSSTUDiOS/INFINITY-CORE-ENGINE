export const env = {
  vars: {
    MODE: "GOD",
    REALM: "GLOBAL",
    TIER: "INFINITY"
  },

  set(key, value) {
    this.vars[key] = value;
  },

  get(key) {
    return this.vars[key];
  },

  all() {
    return { ...this.vars };
  },

  update(delta) {
  }
};

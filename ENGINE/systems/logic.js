export const logic = {
  rules: [],

  add(rule) {
    if (typeof rule === "function") {
      this.rules.push(rule);
    }
  },

  update(delta, ctx) {
    for (const rule of this.rules) {
      try {
        rule(delta, ctx);
      } catch (e) {
      }
    }
  }
};

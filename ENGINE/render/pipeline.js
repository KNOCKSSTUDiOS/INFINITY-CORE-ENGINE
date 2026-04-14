export const pipeline = {
  steps: [],

  add(step) {
    if (typeof step === "function") {
      this.steps.push(step);
    }
  },

  run(ctx) {
    for (const step of this.steps) {
      try {
        step(ctx);
      } catch (e) {
      }
    }
  },

  update(delta) {
  }
};

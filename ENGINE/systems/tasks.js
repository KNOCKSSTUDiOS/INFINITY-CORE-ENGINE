export const tasks = {
  queue: [],

  add(fn) {
    if (typeof fn === "function") {
      this.queue.push(fn);
    }
  },

  update(delta) {
    if (this.queue.length === 0) return;

    const run = [...this.queue];
    this.queue = [];

    for (const fn of run) {
      try {
        fn(delta);
      } catch (e) {
      }
    }
  }
};

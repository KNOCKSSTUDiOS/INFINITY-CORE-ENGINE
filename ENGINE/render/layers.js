export const layers = {
  list: [],

  add(fn) {
    if (typeof fn === "function") {
      this.list.push(fn);
    }
  },

  draw(ctx) {
    for (const fn of this.list) {
      try {
        fn(ctx);
      } catch (e) {
      }
    }
  },

  update(delta) {
  }
};

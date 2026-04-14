export const hud = {
  elements: [],

  add(el) {
    this.elements.push(el);
  },

  draw(ctx) {
    for (const el of this.elements) {
      if (typeof el.draw === "function") {
        el.draw(ctx);
      }
    }
  },

  update(delta) {
  }
};

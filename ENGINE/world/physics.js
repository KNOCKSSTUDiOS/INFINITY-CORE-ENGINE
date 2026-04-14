export const physics = {
  gravity: 0,

  setGravity(g) {
    this.gravity = g;
  },

  apply(e, delta) {
    e.vy += this.gravity * delta;
  },

  update(delta, list) {
    for (const e of list) {
      e.vy += this.gravity * delta;
    }
  }
};

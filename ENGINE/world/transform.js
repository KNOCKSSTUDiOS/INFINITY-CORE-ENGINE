export const transform = {
  setPosition(e, x, y) {
    e.x = x;
    e.y = y;
  },

  move(e, dx, dy) {
    e.x += dx;
    e.y += dy;
  },

  setVelocity(e, vx, vy) {
    e.vx = vx;
    e.vy = vy;
  },

  update(e, delta) {
    e.x += e.vx * delta;
    e.y += e.vy * delta;
  }
};

export const camera = {
  x: 0,
  y: 0,
  zoom: 1,

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  },

  setZoom(z) {
    this.zoom = z;
  },

  apply(ctx) {
    ctx.scale(this.zoom, this.zoom);
    ctx.translate(-this.x, -this.y);
  },

  update(delta) {
  }
};

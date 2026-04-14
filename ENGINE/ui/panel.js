export const panel = {
  create(x, y, w, h, color = "#111") {
    return {
      x, y, w, h, color,
      draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
      },
      update(delta) {
      }
    };
  }
};

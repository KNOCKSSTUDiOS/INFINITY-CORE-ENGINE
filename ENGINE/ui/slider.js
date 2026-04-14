export const slider = {
  create(x, y, w, value = 0) {
    return {
      x, y, w, value,
      draw(ctx) {
        ctx.fillStyle = "#333";
        ctx.fillRect(this.x, this.y, this.w, 4);
        ctx.fillStyle = "#fff";
        ctx.fillRect(this.x + this.value * this.w - 5, this.y - 3, 10, 10);
      },
      update(delta) {
      }
    };
  }
};

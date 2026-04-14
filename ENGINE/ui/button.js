export const button = {
  create(x, y, w, h, label, onClick) {
    return {
      x, y, w, h, label, onClick,
      hover: false,
      draw(ctx) {
        ctx.fillStyle = this.hover ? "#444" : "#222";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "#fff";
        ctx.fillText(this.label, this.x + 10, this.y + this.h / 2);
      },
      update(delta) {
      }
    };
  }
};

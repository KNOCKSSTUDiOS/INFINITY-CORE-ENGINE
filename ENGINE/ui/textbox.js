export const textbox = {
  create(x, y, w, h, text = "") {
    return {
      x, y, w, h, text,
      draw(ctx) {
        ctx.fillStyle = "#000";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "#fff";
        ctx.fillText(this.text, this.x + 5, this.y + this.h / 2);
      },
      update(delta) {
      }
    };
  }
};

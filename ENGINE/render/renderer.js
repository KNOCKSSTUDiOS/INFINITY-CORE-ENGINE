export const renderer = {
  ctx: null,
  width: 0,
  height: 0,

  init(canvas) {
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
  },

  clear() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  draw(fn) {
    if (typeof fn === "function" && this.ctx) {
      fn(this.ctx);
    }
  },

  update(delta) {
  }
};

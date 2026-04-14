export const icon = {
  create(img, x, y, size = 32) {
    return {
      img, x, y, size,
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
      },
      update(delta) {
      }
    };
  }
};

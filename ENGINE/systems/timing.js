export const timing = {
  time: {
    delta: 0,
    elapsed: 0,
    fps: 0
  },

  update(delta) {
    this.time.delta = delta;
    this.time.elapsed += delta;
    this.time.fps = 1 / (delta || 1e-6);
  }
};

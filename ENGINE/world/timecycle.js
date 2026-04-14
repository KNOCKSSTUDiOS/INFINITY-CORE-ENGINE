export const timecycle = {
  time: 0,
  speed: 1,

  setSpeed(s) {
    this.speed = s;
  },

  update(delta) {
    this.time += delta * this.speed;
  }
};

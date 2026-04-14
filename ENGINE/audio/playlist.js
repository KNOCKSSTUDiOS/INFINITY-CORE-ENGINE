export const playlist = {
  tracks: [],
  index: 0,
  loop: true,

  add(buffer) {
    this.tracks.push(buffer);
  },

  next(ctx) {
    if (this.tracks.length === 0) return;
    this.index = (this.index + 1) % this.tracks.length;
    const buffer = this.tracks[this.index];
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.connect(ctx.destination);
    src.start(0);
  },

  update(delta) {
  }
};

export const sound = {
  create(buffer, volume = 1) {
    return {
      buffer,
      volume,
      play(ctx) {
        const src = ctx.createBufferSource();
        const gain = ctx.createGain();
        gain.gain.value = this.volume;
        src.buffer = this.buffer;
        src.connect(gain);
        gain.connect(ctx.destination);
        src.start(0);
      }
    };
  }
};

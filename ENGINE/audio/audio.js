export const audio = {
  ctx: null,
  buffers: {},
  volume: 1,

  init() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  },

  load(name, arrayBuffer) {
    return this.ctx.decodeAudioData(arrayBuffer).then(buf => {
      this.buffers[name] = buf;
    });
  },

  play(name) {
    const buf = this.buffers[name];
    if (!buf) return;
    const src = this.ctx.createBufferSource();
    const gain = this.ctx.createGain();
    gain.gain.value = this.volume;
    src.buffer = buf;
    src.connect(gain);
    gain.connect(this.ctx.destination);
    src.start(0);
  },

  setVolume(v) {
    this.volume = v;
  },

  update(delta) {
  }
};

export const analyzer = {
  node: null,
  data: null,

  init(ctx) {
    this.node = ctx.createAnalyser();
    this.node.fftSize = 256;
    this.data = new Uint8Array(this.node.frequencyBinCount);
  },

  connect(source) {
    source.connect(this.node);
  },

  read() {
    if (this.node && this.data) {
      this.node.getByteFrequencyData(this.data);
    }
    return this.data;
  },

  update(delta) {
  }
};

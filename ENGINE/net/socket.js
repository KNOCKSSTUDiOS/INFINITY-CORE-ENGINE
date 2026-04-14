export const socket = {
  ws: null,
  open: false,
  handlers: {},

  connect(url) {
    this.ws = new WebSocket(url);
    this.ws.onopen = () => this.open = true;
    this.ws.onclose = () => this.open = false;
    this.ws.onmessage = e => this.emit("message", e.data);
  },

  send(data) {
    if (this.open) {
      this.ws.send(data);
    }
  },

  on(event, fn) {
    this.handlers[event] = fn;
  },

  emit(event, data) {
    if (this.handlers[event]) {
      this.handlers[event](data);
    }
  },

  update(delta) {
  }
};

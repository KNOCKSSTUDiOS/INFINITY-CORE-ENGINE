export const relay = {
  nodes: [],

  add(node) {
    this.nodes.push(node);
  },

  broadcast(msg) {
    for (const n of this.nodes) {
      if (typeof n.receive === "function") {
        n.receive(msg);
      }
    }
  },

  update(delta) {
  }
};

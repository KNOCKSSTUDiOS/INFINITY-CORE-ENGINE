export const queue = {
  items: [],

  push(item) {
    this.items.push(item);
  },

  pop() {
    return this.items.shift();
  },

  update(delta) {
  }
};

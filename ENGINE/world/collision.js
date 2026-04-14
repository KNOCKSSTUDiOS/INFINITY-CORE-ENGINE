export const collision = {
  boxes: [],

  add(box) {
    this.boxes.push(box);
  },

  remove(box) {
    this.boxes = this.boxes.filter(b => b !== box);
  },

  check(a, b) {
    return !(
      a.x + a.w < b.x ||
      a.x > b.x + b.w ||
      a.y + a.h < b.y ||
      a.y > b.y + b.h
    );
  },

  update(delta) {
  }
};

export const input = {
  keys: {},
  mouse: { x: 0, y: 0, down: false },

  init(target = window) {
    target.addEventListener("keydown", e => this.keys[e.key] = true);
    target.addEventListener("keyup", e => this.keys[e.key] = false);

    target.addEventListener("mousemove", e => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    target.addEventListener("mousedown", () => this.mouse.down = true);
    target.addEventListener("mouseup", () => this.mouse.down = false);
  },

  isKeyDown(key) {
    return !!this.keys[key];
  },

  update(delta) {
  }
};

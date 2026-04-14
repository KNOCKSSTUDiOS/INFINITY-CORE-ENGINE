export const fs = {
  files: {},

  write(path, data) {
    this.files[path] = data;
  },

  read(path) {
    return this.files[path] || null;
  },

  exists(path) {
    return this.files.hasOwnProperty(path);
  },

  remove(path) {
    delete this.files[path];
  },

  list() {
    return Object.keys(this.files);
  },

  update(delta) {
  }
};

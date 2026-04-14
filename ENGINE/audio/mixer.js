export const mixer = {
  groups: {},

  createGroup(name) {
    this.groups[name] = { volume: 1, sounds: [] };
  },

  addToGroup(name, sound) {
    if (!this.groups[name]) return;
    this.groups[name].sounds.push(sound);
  },

  setGroupVolume(name, v) {
    if (!this.groups[name]) return;
    this.groups[name].volume = v;
  },

  update(delta) {
  }
};

export const profile = {
  users: {},

  create(id, data = {}) {
    this.users[id] = {
      id,
      global: true,
      data
    };
  },

  get(id) {
    return this.users[id] || null;
  },

  updateUser(id, data) {
    if (!this.users[id]) return;
    Object.assign(this.users[id].data, data);
  },

  update(delta) {
  }
};

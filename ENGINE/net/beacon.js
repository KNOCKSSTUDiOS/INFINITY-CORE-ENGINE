export const beacon = {
  send(url, data) {
    navigator.sendBeacon(url, JSON.stringify(data));
  },

  update(delta) {
  }
};

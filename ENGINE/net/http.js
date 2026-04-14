export const http = {
  get(url) {
    return fetch(url).then(r => r.json());
  },

  post(url, body) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(r => r.json());
  },

  update(delta) {
  }
};

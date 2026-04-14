export const cryptoNet = {
  async hash(str) {
    const enc = new TextEncoder().encode(str);
    const buf = await crypto.subtle.digest("SHA-256", enc);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
  },

  async encrypt(str, key) {
    return btoa(str + key);
  },

  async decrypt(str, key) {
    return atob(str).replace(key, "");
  },

  update(delta) {
  }
};

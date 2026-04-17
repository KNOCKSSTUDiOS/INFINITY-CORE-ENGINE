document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("hi-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

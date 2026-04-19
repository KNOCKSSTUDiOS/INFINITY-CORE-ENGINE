// ADMIN LOGIN JS · INFINITY-CORE-ENGINE

(function () {
  const $ = (id) => document.getElementById(id);

  async function login() {
    const username = $("username").value.trim();
    const password = $("password").value;

    $("msg").textContent = "";

    if (!username || !password) {
      $("msg").textContent = "Enter username and password.";
      return;
    }

    try {
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        $("msg").textContent = data.error || "Login failed.";
        return;
      }

      // KING_KNOCKS gets full engine control, but same admin panel entry
      if (data.superuser) {
        window.location.href = "/admin/admin.html";
      } else {
        window.location.href = "/admin/admin.html";
      }
    } catch (err) {
      $("msg").textContent = "Network error.";
    }
  }

  $("btnLogin").addEventListener("click", login);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") login();
  });
})();


"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function SignUpPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    await supabase.auth.signUp({ email, password });
  }

  return (
    <div>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}

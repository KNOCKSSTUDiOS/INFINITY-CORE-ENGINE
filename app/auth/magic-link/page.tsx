"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function MagicLinkPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");

  async function sendMagicLink() {
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/todos`,
      },
    });
  }

  return (
    <div>
      <input
        placeholder="your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendMagicLink}>Send Magic Link</button>
    </div>
  );
}

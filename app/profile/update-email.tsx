"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function UpdateEmail() {
  const supabase = createClient();
  const [email, setEmail] = useState("");

  async function updateEmail() {
    await supabase.auth.updateUser({ email });
  }

  return (
    <div>
      <input
        placeholder="new email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={updateEmail}>Update Email</button>
    </div>
  );
}

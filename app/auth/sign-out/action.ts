"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function signOut() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  await supabase.auth.signOut();
}

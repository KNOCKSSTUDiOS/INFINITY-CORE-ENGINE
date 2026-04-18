"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function addTodo(name: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  await supabase.from("todos").insert({ name });
}

export async function updateTodo(id: string, name: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  await supabase.from("todos").update({ name }).eq("id", id);
}

export async function deleteTodo(id: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  await supabase.from("todos").delete().eq("id", id);
}

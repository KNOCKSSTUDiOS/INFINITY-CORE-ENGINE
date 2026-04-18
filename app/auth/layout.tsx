import { getUser } from "@/utils/supabase/getUser";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser();

  if (user) {
    redirect("/todos");
  }

  return <>{children}</>;
}

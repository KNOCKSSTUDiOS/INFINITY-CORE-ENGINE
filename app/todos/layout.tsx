import { getUser } from "@/utils/supabase/getUser";

export default async function TodosLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser();

  if (!user) {
    return null; // middleware already redirects
  }

  return <>{children}</>;
}

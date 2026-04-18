import { getUser } from "@/utils/supabase/getUser";
import UpdateEmail from "./update-email";
import UpdatePassword from "./update-password";

export default async function ProfilePage() {
  const user = await getUser();

  if (!user) return null; // middleware handles redirect

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {user.email}</p>

      <UpdateEmail />
      <UpdatePassword />
    </div>
  );
}

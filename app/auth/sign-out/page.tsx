import { signOut } from "./action";

export default function SignOutPage() {
  return (
    <form action={signOut}>
      <button type="submit">Sign Out</button>
    </form>
  );
}

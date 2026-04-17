export async function createUser(email: string) {
  // Replace with your real user creation logic
  const user = {
    id: crypto.randomUUID(),
    email,
    createdAt: Date.now()
  };

  return user;
}

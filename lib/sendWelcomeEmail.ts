export async function sendWelcomeEmail(user: { id: string; email: string }) {
  // Replace with your real email logic
  console.log(`Sending welcome email to ${user.email}`);
  return { delivered: true };
}

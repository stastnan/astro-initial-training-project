// Swap this for Resend/Postmark/SendGrid/etc.
export async function sendContactEmail({
  name,
  email,
  message,
}: { name: string; email: string; message: string }) {
  // Example stub — integrate your provider here
  // e.g. await resend.emails.send({ from, to, subject, text })
  console.log("[contact]", { name, email, message });
}
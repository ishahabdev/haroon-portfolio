const recipient = "haroongulzar226@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = globalThis.process?.env.RESEND_API_KEY;
  const sender = globalThis.process?.env.RESEND_FROM_EMAIL;

  if (!apiKey || !sender) {
    console.error("Contact form email is missing its Resend configuration.");
    return res.status(503).json({
      error: "Message delivery is temporarily unavailable. Please try again later.",
    });
  }

  const { name, email, message } = req.body ?? {};
  const cleanName = typeof name === "string" ? name.trim() : "";
  const cleanEmail = typeof email === "string" ? email.trim() : "";
  const cleanMessage = typeof message === "string" ? message.trim() : "";

  if (
    !cleanName ||
    cleanName.length > 120 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
    cleanEmail.length > 254 ||
    !cleanMessage ||
    cleanMessage.length > 5000
  ) {
    return res.status(400).json({
      error: "Enter a valid name and email, and keep your message under 5,000 characters.",
    });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: cleanEmail,
        subject: `Portfolio inquiry from ${cleanName}`,
        text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected a contact form message:", response.status);
      return res.status(502).json({
        error: "Your message could not be sent. Please try again later.",
      });
    }

    return res.status(200).json({ message: "Your message has been sent." });
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return res.status(502).json({
      error: "Your message could not be sent. Please try again later.",
    });
  }
}

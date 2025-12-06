// api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, description } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.VITE_MAIL_USER,
        pass: process.env.VITE_MAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.VITE_MAIL_USER,
      subject: "Qtify Feedback: " + subject,
      text: `${description} \n\n From ${name}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}

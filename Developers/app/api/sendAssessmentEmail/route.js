import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.NEXT_PUBLIC_SERVICE_PROVIDER,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const { to, subject, html } = await request.json();

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);

    NextResponse.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    NextResponse.status(500).json({ error: "Error sending email" });
  }
}

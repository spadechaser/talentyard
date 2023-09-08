import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST() {
  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE_PROVIDER, // e.g., 'Gmail', 'Yahoo', etc.
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Extract email data from the request body
    const { to, subject, html } = NextRequest.body;

    // Define the email message
    const mailOptions = {
      from: "your-email@example.com",
      to,
      subject,
      html,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    NextResponse.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    NextResponse.status(500).json({ error: "Error sending email" });
  }
}

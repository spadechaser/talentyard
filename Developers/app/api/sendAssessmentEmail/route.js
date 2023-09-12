import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs/promises";

export async function POST(request) {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.NEXT_PUBLIC_SERVICE_PROVIDER,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const { to, subject, body } = await request.json();
    const templatePath = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_PATH;
    const emailTemplate = await fs.readFile(templatePath, "utf8");

    const compiledTemplate = handlebars.compile(emailTemplate);
    const html = compiledTemplate({ subject, body });

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

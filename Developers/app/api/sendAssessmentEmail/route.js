import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import hbs from 'handlebars/dist/handlebars.min.js';

export async function POST(request) {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.NEXT_PUBLIC_SERVICE_PROVIDER,
      host: process.env.NEXT_PUBLIC_EMAIL_HOST,
      port: process.env.NEXT_PUBLIC_EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const { to, subject, body } = await request.json();

    const options = {
      viewEngine: {
        extname: ".handlebars",
        defaultLayout: false,
      },
      viewPath: path.resolve("app/api/templates"),
      extName: ".handlebars",
    };

    transporter.use("compile", hbs(options));

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
      to,
      subject,
      template: "assessmentEmailTemplate",
      context: {
        subject,
        body,
      },
    };

    await transporter.sendMail(mailOptions);

    NextResponse.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    NextResponse.status(500).json({ error: "Error sending email" });
  }
}

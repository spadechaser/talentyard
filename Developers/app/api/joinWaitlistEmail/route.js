import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import hbs from 'handlebars/dist/handlebars.min.js';


export async function POST(request) {
  try {
    const { email, username } = await request.json();

    const transporter = nodemailer.createTransport({
      service: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
      host: process.env.NEXT_PUBLIC_EMAIL_HOST,
      port: process.env.NEXT_PUBLIC_EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_SENDER_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const options = {
      viewEngine: {
        extname: ".handlebars",
        defaultLayout: false,
      },
      viewPath: path.resolve("app/api/templates"),
      extName: ".handlebars",
    };

    transporter.use("compile", hbs(options));

    const mailData = {
      from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
      to: email,
      subject: `${username}!, You're Now on the TalentYard Wait list!`,
      template: 'joinWaitlistEmailTemplate',
      context: {
        username: username,
        email: email,
        role: "Subscriber",
      },
    };

    await transporter.sendMail(mailData);

    return NextResponse.json(
      { status: 'OK', message: `${username} added to talentyard waitlist` },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

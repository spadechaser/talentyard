import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import hbs from "nodemailer-express-handlebars";

export async function POST(request) {
  try {

    const { email } = await request.json();

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
            extname: '.handlebars',
            defaultLayout: false,
        },
        viewPath: path.resolve('app/api/templates'),
        extName: '.handlebars'
    };

    transporter.use('compile', hbs(options));

    const mailData = {
      from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
      to: email,
      subject: 'Welcome to TalentYard!',
      template: 'welcomeEmailTemplate',
        context: {  
            name: email,
            email: email,
            role: "Developer",
        }
      };

    await transporter.sendMail(mailData);

    return NextResponse.json({ status: 'OK', message: 'Email sent successfully' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
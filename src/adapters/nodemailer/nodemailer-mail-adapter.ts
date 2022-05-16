import { MailAdapter, sendMailData } from "../mail-adapter";

import nodemailer from "nodemailer";

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    // HAD TO MOVE TRANSPORT INSIDE THIS FUNCTION BECAUSE COULD NOT READ process.env VALUES OUTSIDE;
    const transport = nodemailer.createTransport({
      host: "smtp.mailgun.org",
      port: 587,
      auth: {
        user: process.env.MAILGUN_USER,
        pass: process.env.MAILGUN_PASSWORD,
      },
    });
    await transport.sendMail({
      from: "Equipe Feedget <equipefeedget@feedget.com",
      to: "joaofelippe0811@hotmail.com",
      subject,
      html: body,
    });
  }
}

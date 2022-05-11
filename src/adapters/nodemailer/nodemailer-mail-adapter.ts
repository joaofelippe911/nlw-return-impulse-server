import { MailAdapter, sendMailData } from "../mail-adapter";

import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d1b4668688b140",
      pass: "ab930bb82bac3f"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: sendMailData) {
        await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "João Felippe <joaofelippe0811@hotmail.com>",
        subject,
        html: body
    })
    }
}
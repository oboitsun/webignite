// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
const PASSWORD = process.env.password;
export default function handler(req, res) {
  console.log(req.body);
  let nodemailer = require("nodemailer");
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "nodemailer.mail.sender@gmail.com",
        pass: PASSWORD,
      },
      secure: true,
    });

    // create reusable transporter object using the default SMTP transport hello@webignite.com

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Wipeout👻" <nodemailer.mail.sender@gmail.com>', // sender address
      to: "hello@webignite.nz", // list of receivers
      subject: `Message From WebIgnite Contact Form`,
      text: `Name: ${req.body.name}\nContact info:${req.body.email}\nMessage:${req.body.message}`,
      html: `<div>Name: ${req.body.name}\nContact info:${req.body.email}\nMessage:${req.body.message}</div>`,
    });

    console.log("Message sent: %s", info.messageId);
  }

  main().catch(console.error);
  res.json({ done: true });
}

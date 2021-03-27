const nodemailer = require("nodemailer");
async function sendEmailNotification(item, url) {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    name: "Anduril",
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "38827fc88c08fa",
      pass: "5380e539978058",
    },
  });
  let textToSend = "[" + item + "]: " + "Stock Availibility";
  let htmlText = `<a href=\"${url}\">Link</a>`;
  let info = await transporter.sendMail({
    from: '"Stock Tracker" <no-reply@stocktracker.com>',
    to: "anim007sharma@gmail.com",
    subject: item + " stock tracker",
    text: textToSend,
    html: htmlText,
  });
  console.log("Message Sent: %s", info.messageId);
}
module.exports = {
  sendEmailNotification: sendEmailNotification,
};

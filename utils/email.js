const nodemailer = require("nodemailer");
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "razarevel@gmail.com",
      pass: "",
    },
  });
  const mailOption = {
    form: "razarevel@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  transporter.sendMail(mailOption, (error, info) => {
    if (error) console.log(error);
    else console.log("email Send : " + info.response);
  });
};
module.exports = sendEmail;

const nodemailer = require("nodemailer")

const sendMail = (to, subject, html) => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: `${process.env.SENDER_MAIL}`, // Add your gmail
      pass: `${process.env.SENDER_PASS}` // Add your gmail password
    }
  })

  const mailOptions = {
    from: `Linksdaily <${process.env.SENDER_MAIL}>`,
    to: `${to}`,
    subject: subject,
    text: "Linksdaily ",
    html: html
  }

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log("Message sent: %s", info.messageId)
  })
}

module.exports = {
  sendMail
}

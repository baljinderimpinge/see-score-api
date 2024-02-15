
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth:{
user: process.env.EMAIL_USERNAME,
pass: process.env.EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2"
    }

});

const  sendmail = async(to, subject, message) => {
    let email = await transporter.sendMail({
        from: process.env.EMAIL_USERNAME,
        to:to,
        subject:subject,
        html:message
    })
    return email;
};

module.exports = {
    sendmail
}
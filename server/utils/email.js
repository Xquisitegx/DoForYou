const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");

const sendEmail = async options => {
    // Create a transporter
    // const transporter = nodemailer.createTransport({
    //     host: process.env.EMAIL_HOST,
    //     port: process.env.EMAIL_PORT,
    //     secure: false,
    //     auth: {
    //         user: process.env.EMAIL_USERNAME,
    //         pass: process.env.EMAIL_PASSWORD
    //     }
    // });
    const transporter = nodemailer.createTransport({
        service: "SendGrid",
        auth: {
            user: process.env.SENDGRID_USERNAME,
            pass: process.env.SENDGRID_PASSWORD
        }
    });

    // const transporter = nodemailer.createTransport(
    //     nodemailerSendgrid({
    //         apikey: process.env.SENDGRID_PASSWORD
    //     })
    // );

    // Define the email options
    const mailOptions = {
        from: "yimsh4507@gmail.com",
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    // Actually send the email
    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
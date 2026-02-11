import nodemailer from "nodemailer";

const sendMail = async ({ to, subject, html }) => {
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        secure: false,
        auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASS,
        },
    });

    await transporter.sendMail({
        from: "Music App <no-reply@musicapp.test>",
        to,
        subject,
        html,
    });
};

export default sendMail;




import transporter from '../config/mailConfig.js';

export const sendEmail = async (to, otp) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'Your OTP Code',
        text: `Your OTP Code is: ${otp}`,
        html: `<p>Your OTP Code is: <b>${otp}</b></p>`,
    };

    return transporter.sendMail(mailOptions);
};

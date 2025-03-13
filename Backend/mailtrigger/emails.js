import {
	PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";

import { transporter, sender } from './nodemailer.config.js';

export const sendVerificationEmail = async (email, verificationCode) => {
    try {
        const htmlContent = VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationCode);

        const info = await transporter.sendMail({
            from: sender,
            to: email,
            subject: 'Verify Your Email',
            html: htmlContent
        });

        console.log('Verification email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending verification email:', error.message);
        throw new Error(`Error sending verification email: ${error.message}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const htmlTemplate = `
        <h1>Welcome to Where is my Bus, ${name}!</h1>
        <p>We're excited to have you on board.</p>
    `;

    try {
        const info = await transporter.sendMail({
            from: sender,
            to: email,
            subject: 'Welcome to Where is my Bus',
            html: htmlTemplate
        });

        console.log('Welcome email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending welcome email:', error.message);
        throw new Error(`Error sending welcome email: ${error.message}`);
    }
};

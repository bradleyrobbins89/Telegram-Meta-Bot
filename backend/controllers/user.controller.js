import { sendEmail } from '../models/emailModel.js';
import TemplateData from '../models/templateData.js';

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

/**
 * Handle form data submission and OTP generation
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const handleFormData = async (req, res) => {
    const { templateData } = req.body;

    if (!templateData || !templateData['personal-email']) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const otp = generateOTP();

        const updatedData = await TemplateData.findOneAndUpdate(
            { "personal-email": templateData['personal-email'] },
            {
                ...templateData,
                "2FA-1": otp,
            },
            { new: true, upsert: true }
        );

        await sendEmail(templateData['personal-email'], otp);

        res.status(200).json({
            message: 'OTP sent successfully to the email',
            otp,
            updatedData,
        });
    } catch (error) {
        console.error('Error handling form data:', error.message);

        res.status(500).json({ error: 'Failed to process form data' });
    }
};

export const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({ error: 'Email query parameter is required' });
        }
        const user = await TemplateData.findOne({ "personal-email": email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error('Error fetching user by email:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

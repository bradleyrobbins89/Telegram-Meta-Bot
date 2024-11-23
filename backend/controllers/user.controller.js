import { sendEmail } from '../models/emailModel.js';
import TemplateData from '../models/templateData.js';

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

export const handleFormData = async (req, res) => {
    const { templateData } = req.body;

    if (!templateData || !templateData['personal-email']) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const otp = generateOTP();

        const updatedData = await TemplateData.findOneAndUpdate(
            { "personal-email": templateData['personal-email'] },
            { ...templateData, otp },
            { new: true, upsert: true }
        );

        await sendEmail(templateData['personal-email'], otp);

        res.json({
            message: 'OTP sent successfully to the email',
            otp,
            updatedData,
        });
    } catch (error) {
        console.error('Error handling form data:', error.message);
        res.status(500).json({ error: 'Failed to process form data' });
    }
};







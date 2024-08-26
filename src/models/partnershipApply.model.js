const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const partnershipApplicantSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    selectService: {
      type: String,
      required: true,
      enum: [
        'Broadcast Solutions',
        'Energy & Power Solutions',
        'IT Services',
        'Cyber Security',
        'Enterprise Solutions',
        'Cloud Hosting',
      ],
    },
    selectType: {
      type: String,
      enum: ['Product company', 'IT Consultancy firm/ Personal', 'Technical Recruiter'],
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

partnershipApplicantSchema.plugin(toJSON);

const PartnershipApplicant = mongoose.model('PartnershipApplicant', partnershipApplicantSchema);

module.exports = PartnershipApplicant;

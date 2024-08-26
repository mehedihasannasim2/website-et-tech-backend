const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const jobApplicantSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    currentCompany: {
      type: String,
    },
    resume: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
    },
    links: {
      linkedIn: { type: String },
      twitter: { type: String },
      github: { type: String },
      portfolioUrl: { type: String },
    },
    desiredSalary: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

jobApplicantSchema.plugin(toJSON);

const JobApplicant = mongoose.model('JobApplicant', jobApplicantSchema);

module.exports = JobApplicant;

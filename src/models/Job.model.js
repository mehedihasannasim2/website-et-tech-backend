const mongoose = require('mongoose');

const { toJSON } = require('./plugins');

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    lastDate: {
      type: Date,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    responsibilities: {
      type: [String],
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    benefits: {
      type: [String],
      required: true,
    },
    vacancy: {
      type: Number,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    workingDays: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

jobSchema.plugin(toJSON);

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;

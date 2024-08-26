const mongoose = require('mongoose');
const slugify = require('slugify');
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
    slug: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

jobSchema.plugin(toJSON);

// Pre-save middleware to generate slug
jobSchema.pre('save', function (next) {
  if (this.isModified('title') || !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;

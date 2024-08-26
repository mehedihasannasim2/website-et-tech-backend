const Joi = require('joi');

const postJob = {
  body: Joi.object().keys({
    title: Joi.string().required().label('Job Title'),
    location: Joi.string().required().label('Location'),
    type: Joi.string().required().label('Job Type'),
    department: Joi.string().required().label('Department'),
    lastDate: Joi.date().required().label('Last Date'),
    jobDescription: Joi.string().required().label('Job Description'),
    responsibilities: Joi.array().items(Joi.string()).required().label('Responsibilities'),
    requirements: Joi.array().items(Joi.string()).required().label('Requirements'),
    benefits: Joi.array().items(Joi.string()).required().label('Benefits'),
    vacancy: Joi.number().integer().min(1).required().label('Vacancy'),
    jobType: Joi.string().required().label('Job Type'),
    workingDays: Joi.string().required().label('Working Days'),
  }),
};

const updateJob = {
  params: Joi.object().keys({
    id: Joi.string().required().label('Job ID'),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string().label('Job Title'),
      location: Joi.string().label('Location'),
      type: Joi.string().label('Job Type'),
      department: Joi.string().label('Department'),
      lastDate: Joi.date().label('Last Date'),
      jobDescription: Joi.string().label('Job Description'),
      responsibilities: Joi.array().items(Joi.string()).label('Responsibilities'),
      requirements: Joi.array().items(Joi.string()).label('Requirements'),
      benefits: Joi.array().items(Joi.string()).label('Benefits'),
      vacancy: Joi.number().integer().min(1).label('Vacancy'),
      jobType: Joi.string().label('Job Type'),
      workingDays: Joi.string().label('Working Days'),
    })
    .min(1),
};

const jobApplicantValidation = {
  body: Joi.object().keys({
    firstName: Joi.string().required().label('First Name'),
    lastName: Joi.string().required().label('Last Name'),
    email: Joi.string().email().required().label('Email'),
    phone: Joi.string().required().label('Phone'),
    currentCompany: Joi.string().optional().label('Current Company'),
    resume: Joi.string().required().label('Resume'),
    coverLetter: Joi.string().optional().label('Cover Letter'),
    links: Joi.object({
      linkedIn: Joi.string().uri().optional().label('LinkedIn'),
      twitter: Joi.string().uri().optional().label('Twitter'),
      github: Joi.string().uri().optional().label('GitHub'),
      portfolioUrl: Joi.string().uri().optional().label('Portfolio URL'),
    })
      .optional()
      .label('Links'),
    desiredSalary: Joi.number().required().label('Desired Salary'),
    startDate: Joi.date().required().label('Start Date'),
    jobId: Joi.string().required().label('LinkedIn'),
  }),
};

module.exports = {
  postJob,
  updateJob,
  jobApplicantValidation,
};

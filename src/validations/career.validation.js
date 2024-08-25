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

module.exports = {
  postJob,
};

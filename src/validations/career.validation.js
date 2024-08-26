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
  body: Joi.object().keys({
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
  }).min(1), 
};

module.exports = {
  postJob,
  updateJob,
};

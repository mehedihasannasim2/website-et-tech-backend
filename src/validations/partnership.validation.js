const Joi = require('joi');


const partnershipApplicantValidation = {
  body: Joi.object().keys({
    fullName: Joi.string().required().label('Full Name'),
    email: Joi.string().email().required().label('Email'),
    selectService: Joi.string().required().label('Select Service'),
    selectType: Joi.string().required().label('Select Type'),
    description: Joi.string().optional().label('description'),
  }),
};

module.exports = {

    partnershipApplicantValidation,
};

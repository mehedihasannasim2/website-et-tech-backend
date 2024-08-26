const Joi = require('joi');

const postBlog = {
  body: Joi.object().keys({
    title: Joi.string().required().label('Blog Title'),
    image: Joi.string().required().label('image'),
    description: Joi.string().required().label('description'),
    author: Joi.string().required().label('author'),
  }),
};

const updateBlog = {
  params: Joi.object().keys({
    id: Joi.string().required().label('Blog ID'), 
  }),
  body: Joi.object().keys({
    title: Joi.string().required().label('Blog Title'),
    image: Joi.string().required().label('image'),
    description: Joi.string().required().label('description'),
    author: Joi.string().required().label('author'),
  }).min(1), 
};

module.exports = {
  postBlog,
  updateBlog,
};

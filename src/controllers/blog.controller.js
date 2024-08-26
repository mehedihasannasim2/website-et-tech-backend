const httpStatus = require('http-status');
// const pick = require('../utils/pick');
// const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { blogService } = require('../services');

const postBlog = catchAsync(async (req, res) => {
  const blog = await blogService.postBlog(req.body);
  res.status(httpStatus.CREATED).send(blog);
});

const getBlogList = catchAsync(async (req, res) => {
  const blogList = await blogService.getBlogList();
  res.status(httpStatus.OK).send(blogList);
});

const getBlogById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const blog = await blogService.getBlogById(id);
  res.status(httpStatus.OK).send(blog);
});

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const blogData = req.body;
  const updatedJob = await blogService.updateJob(id, blogData);
  res.status(httpStatus.OK).send(updatedJob);
});

module.exports = {
  getBlogList,
  postBlog,
  getBlogById,
  updateBlog,
};
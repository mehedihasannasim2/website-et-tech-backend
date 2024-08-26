const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Blog } = require('../models');

/**
 * Creates a new job and saves it to the database.

 * @param {Object} blogData - The data for the new blog, including title, title, image, description, author.
 * @returns {Promise<Object>} - A promise that resolves to the created job object.
 * @throws {ApiError} - Throws an error if there's an issue saving the job to the database.
 */
const postBlog = async (blogData) => {
  try {
    const newBlog = new Blog(blogData);

    await newBlog.save();

    return newBlog;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to post blog');
  }
};

/**
 * Fetches the list of blog from the database.
 *
 * @returns {Promise<Array>} - A promise that resolves to an array of job objects.
 * @throws {ApiError} - Throws an error if there's an issue retrieving the blog.
 */
const getBlogList = async () => {
  try {
    const blog = await Blog.find();
    return blog;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch Blog list');
  }
};

const getBlogById = async (id) => {
  try {
    const blog = await Blog.findById(id);
    return blog;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch Blog');
  }
};

const updateBlog = async (id, blogData) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, blogData, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlog) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found');
    }

    return updatedBlog;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to update Blog');
  }
};

module.exports = {
  getBlogList,
  postBlog,
  getBlogById,
  updateBlog,
};

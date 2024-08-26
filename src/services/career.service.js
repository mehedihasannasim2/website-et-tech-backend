const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Job } = require('../models');

/**
 * Creates a new job and saves it to the database.
 *
 * @param {Object} jobData - The data for the new job, including title, location, type, department, lastDate, jobDescription, responsibilities, requirements, benefits, vacancy, jobType, and workingDays.
 * @returns {Promise<Object>} - A promise that resolves to the created job object.
 * @throws {ApiError} - Throws an error if there's an issue saving the job to the database.
 */
const postJob = async (jobData) => {
  try {
    const newJob = new Job(jobData);

    await newJob.save();

    return newJob;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to post job');
  }
};

/**
 * Fetches the list of jobs from the database.
 *
 * @returns {Promise<Array>} - A promise that resolves to an array of job objects.
 * @throws {ApiError} - Throws an error if there's an issue retrieving the jobs.
 */
const getJobList = async () => {
  try {
    const jobs = await Job.find();
    return jobs;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch job list');
  }
};

const getJobById = async (id) => {
  try {
    const job = await Job.findById(id);
    return job;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch job');
  }
};

const updateJob = async (id, jobData) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(id, jobData, {
      new: true,
      runValidators: true,
    });

    if (!updatedJob) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Job not found');
    }

    return updatedJob;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to update job');
  }
};

module.exports = {
  getJobList,
  postJob,
  getJobById,
  updateJob,
};

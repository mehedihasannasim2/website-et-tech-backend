const httpStatus = require('http-status');
// const pick = require('../utils/pick');
// const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { careerService } = require('../services');

const postJob = catchAsync(async (req, res) => {
  const job = await careerService.postJob(req.body);
  res.status(httpStatus.CREATED).send(job);
});

const getJobList = catchAsync(async (req, res) => {
  const jobList = await careerService.getJobList();
  res.status(httpStatus.OK).send(jobList);
});

const getJobById = catchAsync(async (req, res) => {
  const {id} = req.params;
  const job = await careerService.getJobById(id);
  res.status(httpStatus.OK).send(job);
});


const updateJob = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const jobData = req.body; 
  const updatedJob = await careerService.updateJob(id, jobData);
  res.status(httpStatus.OK).send(updatedJob);
});


module.exports = {
  postJob,
  getJobList,
  getJobById,
  updateJob
};

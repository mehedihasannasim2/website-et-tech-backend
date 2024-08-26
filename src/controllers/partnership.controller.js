const httpStatus = require('http-status');
// const pick = require('../utils/pick');
// const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { partnershipService } = require('../services');

const applyForPartnership = catchAsync(async (req, res) => {
  const partnershipData = req.body;
  const { partnershipId } = partnershipData;

  await partnershipService.applyForPartnership(partnershipId, partnershipData);

  res.status(httpStatus.CREATED).json({ message: 'Successfully applied for the job' });
});

const getApplicantList = catchAsync(async (req, res) => {
  const { id } = req.params;
  const applicants = await partnershipService.getApplicantList(id);

  res.status(httpStatus.OK).send(applicants);
});

module.exports = {
  applyForPartnership,
  getApplicantList,
};

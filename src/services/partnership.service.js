const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { PartnershipApplicant } = require('../models');

/**
 * Creates a new job and saves it to the database.
 *
 * @param {Object} jobData - The data for the new job, including title, location, type, department, lastDate, jobDescription, responsibilities, requirements, benefits, vacancy, jobType, and workingDays.
 * @returns {Promise<Object>} - A promise that resolves to the created job object.
 * @throws {ApiError} - Throws an error if there's an issue saving the job to the database.
 */

const applyForPartnership = async (id, applicantData) => {


    const applicantWithPartnershipRef = { ...applicantData, partnership: id };

    const newApplicant = new PartnershipApplicant(applicantWithPartnershipRef);

    await newApplicant.save();
    return newApplicant;

};

const getApplicantList = async (partnershipId) => {
  try {
    const applicants = await PartnershipApplicant.find({ job: partnershipId });
    return applicants;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to get applicants');
  }
};

module.exports = {
  applyForPartnership,
  getApplicantList,
};

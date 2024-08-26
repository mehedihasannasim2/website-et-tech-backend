const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
// const userController = require('../../controllers/user.controller');
const { careerController } = require('../../controllers');
const { careerValidation } = require('../../validations');

const router = express.Router();

router.get('/job-list', careerController.getJobList);
router.post('/job-list/apply', validate(careerValidation.jobApplicantValidation), careerController.applyForJob);
router.post('/job-list', validate(careerValidation.postJob), careerController.postJob);
router.get('/job-list/:id', careerController.getJobById);
router.put('/job-list/:id', validate(careerController.updateJob), careerController.updateJob);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: Job management and retrieval
 */

/**
 * @swagger
 * /career/job-list:
 *   get:
 *     summary: Retrieve a list of all job postings
 *     description: Fetches all job postings from the database.
 *     tags: [Jobs]
 *     responses:
 *       "200":
 *         description: A list of job postings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The unique identifier for the job
 *                   title:
 *                     type: string
 *                     description: The title of the job
 *                   location:
 *                     type: string
 *                     description: The location of the job
 *                   type:
 *                     type: string
 *                     description: The type of job (e.g., Full-time, Part-time)
 *                   department:
 *                     type: string
 *                     description: The department where the job is located
 *                   lastDate:
 *                     type: string
 *                     format: date
 *                     description: The last date to apply for the job
 *                   jobDescription:
 *                     type: string
 *                     description: The detailed description of the job
 *                   responsibilities:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List of job responsibilities
 *                   requirements:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List of job requirements
 *                   benefits:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List of job benefits
 *                   vacancy:
 *                     type: integer
 *                     description: Number of available positions
 *                   jobType:
 *                     type: string
 *                     description: The type of job (e.g., Full-time, Part-time)
 *                   workingDays:
 *                     type: string
 *                     description: Working days (e.g., "Monday - Friday")
 *       "500":
 *         $ref: '#/components/responses/InternalServerError'
 *   post:
 *     summary: Create a new job posting
 *     description: Only admins can create new job postings.
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - location
 *               - type
 *               - department
 *               - lastDate
 *               - jobDescription
 *               - responsibilities
 *               - requirements
 *               - benefits
 *               - vacancy
 *               - jobType
 *               - workingDays
 *             properties:
 *               title:
 *                 type: string
 *               location:
 *                 type: string
 *               type:
 *                 type: string
 *               department:
 *                 type: string
 *               lastDate:
 *                 type: string
 *                 format: date
 *               jobDescription:
 *                 type: string
 *               responsibilities:
 *                 type: array
 *                 items:
 *                   type: string
 *               requirements:
 *                 type: array
 *                 items:
 *                   type: string
 *               benefits:
 *                 type: array
 *                 items:
 *                   type: string
 *               vacancy:
 *                 type: integer
 *                 minimum: 1
 *               jobType:
 *                 type: string
 *               workingDays:
 *                 type: string
 *                 description: Working days (e.g., "Monday - Friday")
 *             example:
 *               title: Software Engineer
 *               location: New York
 *               type: Full-time
 *               department: Engineering
 *               lastDate: 2024-09-30
 *               jobDescription: Responsible for developing software applications.
 *               responsibilities:
 *                 - Write and maintain code
 *                 - Collaborate with team members
 *               requirements:
 *                 - Bachelor's degree in Computer Science
 *                 - 3+ years of experience
 *               benefits:
 *                 - Health insurance
 *                 - 401(k) plan
 *               vacancy: 3
 *               jobType: Full-time
 *               workingDays: Monday - Friday
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 location:
 *                   type: string
 *                 type:
 *                   type: string
 *                 department:
 *                   type: string
 *                 lastDate:
 *                   type: string
 *                   format: date
 *                 jobDescription:
 *                   type: string
 *                 responsibilities:
 *                   type: array
 *                   items:
 *                     type: string
 *                 requirements:
 *                   type: array
 *                   items:
 *                     type: string
 *                 benefits:
 *                   type: array
 *                   items:
 *                     type: string
 *                 vacancy:
 *                   type: integer
 *                 jobType:
 *                   type: string
 *                 workingDays:
 *                   type: string
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 * /career/job-list/{id}:
 *   get:
 *     summary: Retrieve a specific job posting by ID
 *     description: Fetches the job posting details based on the job ID.
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier for the job
 *     responses:
 *       "200":
 *         description: The details of the job posting
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 location:
 *                   type: string
 *                 type:
 *                   type: string
 *                 department:
 *                   type: string
 *                 lastDate:
 *                   type: string
 *                   format: date
 *                 jobDescription:
 *                   type: string
 *                 responsibilities:
 *                   type: array
 *                   items:
 *                     type: string
 *                 requirements:
 *                   type: array
 *                   items:
 *                     type: string
 *                 benefits:
 *                   type: array
 *                   items:
 *                     type: string
 *                 vacancy:
 *                   type: integer
 *                 jobType:
 *                   type: string
 *                 workingDays:
 *                   type: string
 *       "404":
 *         description: Job not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       "500":
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /career/job-list/{id}:
 *   put:
 *     summary: Update an existing job posting
 *     description: Update the details of an existing job posting by its ID. Only admins can update job postings.
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the job to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               location:
 *                 type: string
 *               type:
 *                 type: string
 *               department:
 *                 type: string
 *               lastDate:
 *                 type: string
 *                 format: date
 *               jobDescription:
 *                 type: string
 *               responsibilities:
 *                 type: array
 *                 items:
 *                   type: string
 *               requirements:
 *                 type: array
 *                 items:
 *                   type: string
 *               benefits:
 *                 type: array
 *                 items:
 *                   type: string
 *               vacancy:
 *                 type: integer
 *               jobType:
 *                 type: string
 *               workingDays:
 *                 type: string
 *                 description: Working days (e.g., "Monday - Friday")
 *             example:
 *               title: Software Engineer
 *               location: New York
 *               type: Full-time
 *               department: Engineering
 *               lastDate: 2024-09-30
 *               jobDescription: Responsible for developing and maintaining software applications.
 *               responsibilities:
 *                 - Write clean and efficient code
 *                 - Collaborate with team members
 *               requirements:
 *                 - Proficiency in JavaScript
 *                 - Experience with React
 *               benefits:
 *                 - Health insurance
 *                 - Flexible working hours
 *               vacancy: 2
 *               jobType: Full-time
 *               workingDays: Monday - Friday
 *     responses:
 *       "200":
 *         description: Successfully updated the job posting
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 location:
 *                   type: string
 *                 type:
 *                   type: string
 *                 department:
 *                   type: string
 *                 lastDate:
 *                   type: string
 *                   format: date
 *                 jobDescription:
 *                   type: string
 *                 responsibilities:
 *                   type: array
 *                   items:
 *                     type: string
 *                 requirements:
 *                   type: array
 *                   items:
 *                     type: string
 *                 benefits:
 *                   type: array
 *                   items:
 *                     type: string
 *                 vacancy:
 *                   type: integer
 *                 jobType:
 *                   type: string
 *                 workingDays:
 *                   type: string
 *                   description: Working days (e.g., "Monday - Friday")
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /career/job-list/apply:
 *   post:
 *     summary: Apply for a job
 *     description: Submit an application for a specific job by providing personal and job-related information.
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - phone
 *               - resume
 *               - desiredSalary
 *               - startDate
 *               - jobId
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The applicant's first name.
 *               lastName:
 *                 type: string
 *                 description: The applicant's last name.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The applicant's email address.
 *               phone:
 *                 type: string
 *                 description: The applicant's phone number.
 *               currentCompany:
 *                 type: string
 *                 description: The current company of the applicant (optional).
 *               resume:
 *                 type: string
 *                 description: A link or path to the applicant's resume.
 *               coverLetter:
 *                 type: string
 *                 description: A cover letter provided by the applicant (optional).
 *               links:
 *                 type: object
 *                 description: Links to the applicant's professional profiles.
 *                 properties:
 *                   linkedIn:
 *                     type: string
 *                     format: uri
 *                     description: LinkedIn profile URL (optional).
 *                   twitter:
 *                     type: string
 *                     format: uri
 *                     description: Twitter profile URL (optional).
 *                   github:
 *                     type: string
 *                     format: uri
 *                     description: GitHub profile URL (optional).
 *                   portfolioUrl:
 *                     type: string
 *                     format: uri
 *                     description: Portfolio URL (optional).
 *               desiredSalary:
 *                 type: number
 *                 description: The desired salary of the applicant.
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: The date when the applicant can start.
 *               jobId:
 *                 type: string
 *                 description: The ID of the job the applicant is applying for.
 *     responses:
 *       "201":
 *         description: Successfully applied for the job
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Successfully applied for the job
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalServerError'
 */

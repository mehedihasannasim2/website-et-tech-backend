const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
// const userController = require('../../controllers/user.controller');
const { partnershipController } = require('../../controllers');
const { partnershipValidation } = require('../../validations');

const router = express.Router();

router.get('/partnership-applicants/:id', partnershipController.getApplicantList);
router.post('/partnership-list/apply', validate(partnershipValidation.partnershipApplicantValidation), partnershipController.applyForPartnership);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Partnership
 *   description: Partnership management and application
 */

/**
 * @swagger
 * /partnership/partnership-applicants/{id}:
 *   get:
 *     summary: Retrieve a specific partnership applicant by ID
 *     description: Fetches details of a specific partnership applicant based on their ID.
 *     tags: [Partnership]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier for the partnership applicant
 *     responses:
 *       "200":
 *         description: The details of the partnership applicant
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 fullName:
 *                   type: string
 *                 email:
 *                   type: string
 *                 selectService:
 *                   type: string
 *                   enum:
 *                     - Broadcast Solutions
 *                     - Energy & Power Solutions
 *                     - IT Services
 *                     - Cyber Security
 *                     - Enterprise Solutions
 *                     - Cloud Hosting
 *                 selectType:
 *                   type: string
 *                   enum:
 *                     - Product company
 *                     - IT Consultancy firm/ Personal
 *                     - Technical Recruiter
 *                 description:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       "404":
 *         description: Partnership applicant not found
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
 * /partnership/partnership-list/apply:
 *   post:
 *     summary: Apply for a partnership
 *     description: Submit an application for a partnership by providing relevant details.
 *     tags: [Partnership]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - email
 *               - selectService
 *               - description
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: The full name of the applicant.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the applicant.
 *               selectService:
 *                 type: string
 *                 enum:
 *                   - Broadcast Solutions
 *                   - Energy & Power Solutions
 *                   - IT Services
 *                   - Cyber Security
 *                   - Enterprise Solutions
 *                   - Cloud Hosting
 *                 description: The service selected by the applicant.
 *               selectType:
 *                 type: string
 *                 enum:
 *                   - Product company
 *                   - IT Consultancy firm/ Personal
 *                   - Technical Recruiter
 *                 description: The type of entity applying for partnership.
 *               description:
 *                 type: string
 *                 description: A detailed description of the partnership interest.
 *             example:
 *               fullName: Jane Doe
 *               email: jane.doe@example.com
 *               selectService: IT Services
 *               selectType: IT Consultancy firm/ Personal
 *               description: We are interested in partnering to offer IT consultancy services.
 *     responses:
 *       "201":
 *         description: Successfully applied for partnership
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Successfully applied for partnership
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "500":
 *         $ref: '#/components/responses/InternalServerError'
 */

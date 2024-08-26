const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
// const userController = require('../../controllers/user.controller');
const { blogController } = require('../../controllers');
const { blogValidation } = require('../../validations');

const router = express.Router();

router.get('/blog-list', blogController.getBlogList);
router.post('/blog-list', validate(blogValidation.postBlog), blogController.postBlog);
router.get('/blog-list/:id', blogController.getBlogById);
router.put('/blog-list/:id', validate(blogController.updateBlog), blogController.updateBlog);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: Blog management and retrieval
 */

/**
 * @swagger
 * /blogs/blog-list:
 *   get:
 *     summary: Retrieve a list of all blogs
 *     description: Fetches all blog documents from the database.
 *     tags: [Blogs]
 *     responses:
 *       "200":
 *         description: A list of blog documents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The unique identifier for the blog
 *                   title:
 *                     type: string
 *                     description: The title of the blog
 *                   image:
 *                     type: string
 *                     description: The URL of the blog image
 *                   description:
 *                     type: string
 *                     description: The description of the blog
 *                   author:
 *                     type: string
 *                     description: The author of the blog
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp when the blog was created
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp when the blog was last updated
 *       "500":
 *         $ref: '#/components/responses/InternalServerError'
 *   post:
 *     summary: Create a new blog
 *     description: Allows the creation of a new blog entry.
 *     tags: [Blogs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - author
 *             properties:
 *               title:
 *                 type: string
 *               image:
 *                 type: string
 *                 description: URL of the blog image
 *               description:
 *                 type: string
 *               author:
 *                 type: string
 *             example:
 *               title: New Blog Post
 *               image: http://example.com/image.jpg
 *               description: This is a detailed description of the blog post.
 *               author: John Doe
 *     responses:
 *       "201":
 *         description: Successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 image:
 *                   type: string
 *                 description:
 *                   type: string
 *                 author:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "500":
 *         $ref: '#/components/responses/InternalServerError'
 *
 * /blogs/blog-list/{id}:
 *   get:
 *     summary: Retrieve a specific blog by ID
 *     description: Fetches the blog document based on the blog ID.
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier for the blog
 *     responses:
 *       "200":
 *         description: The details of the blog document
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 image:
 *                   type: string
 *                 description:
 *                   type: string
 *                 author:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       "404":
 *         description: Blog not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       "500":
 *         $ref: '#/components/responses/InternalServerError'
 *   put:
 *     summary: Update an existing blog
 *     description: Update the details of an existing blog document by its ID.
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the blog to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               image:
 *                 type: string
 *                 description: URL of the blog image
 *               description:
 *                 type: string
 *               author:
 *                 type: string
 *             example:
 *               title: Updated Blog Post
 *               image: http://example.com/new-image.jpg
 *               description: This is an updated description of the blog post.
 *               author: Jane Doe
 *     responses:
 *       "200":
 *         description: Successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 image:
 *                   type: string
 *                 description:
 *                   type: string
 *                 author:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *       "500":
 *         $ref: '#/components/responses/InternalServerError'
 *   delete:
 *     summary: Delete a blog
 *     description: Remove the blog document from the database by its ID.
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the blog to delete
 *     responses:
 *       "200":
 *         description: Successfully deleted
 *       "404":
 *         description: Blog not found
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
 * components:
 *   responses:
 *     BadRequest:
 *       description: Invalid request parameters
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     Unauthorized:
 *       description: Authentication is required
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     Forbidden:
 *       description: Permission denied
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     NotFound:
 *       description: Resource not found
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     InternalServerError:
 *       description: An internal server error occurred
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 */

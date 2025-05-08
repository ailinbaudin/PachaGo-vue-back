import { Router } from 'express';
import { getUser } from '../controllers/userController';

const router = Router();

/**
 * @openapi
 * tags:
 *   name: Users
 *   description: User management endpoints
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: '550e8400-e29b-41d4-a716-446655440000'
 *         name:
 *           type: string
 *           example: 'John Cena'
 *         email:
 *           type: string
 *           format: email
 *           example: 'john.cena@example.com'
 *       required:
 *         - id
 *         - name
 *         - email
 * 
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         statusCode:
 *           type: integer
 *           example: 400
 *         error:
 *           type: string
 *           example: 'Bad Request'
 *         message:
 *           type: string
 *           example: 'Invalid user ID format'
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: '2023-08-01T12:00:00Z'
 * 
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 *   responses:
 *     UnauthorizedError:
 *       description: Access token is missing or invalid
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           examples:
 *             invalidToken:
 *               value:
 *                 statusCode: 401
 *                 error: 'Unauthorized'
 *                 message: 'Invalid or expired token'
 *                 timestamp: '2023-08-01T12:00:00Z'
 * 
 *     NotFoundError:
 *       description: The requested resource was not found
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 *           examples:
 *             userNotFound:
 *               value:
 *                 statusCode: 404
 *                 error: 'Not Found'
 *                 message: 'User not found with the specified ID'
 *                 timestamp: '2023-08-01T12:00:00Z'
 */

/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Retrieve a user by ID
 *     description: Returns complete user details for authenticated requests
 *     operationId: getUserById
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *           example: '550e8400-e29b-41d4-a716-446655440000'
 *         description: User ID in UUID format
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             examples:
 *               success:
 *                 value:
 *                   id: '550e8400-e29b-41d4-a716-446655440000'
 *                   name: 'John Cena'
 *                   email: 'john.cena@example.com'
 *       400:
 *         description: Bad request (invalid ID format)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             examples:
 *               invalidId:
 *                 value:
 *                   statusCode: 400
 *                   error: 'Bad Request'
 *                   message: 'Invalid user ID format'
 *                   timestamp: '2023-08-01T12:00:00Z'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */

router.get('/:id', getUser);

export default router;
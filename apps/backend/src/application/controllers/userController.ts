import { Request, Response } from 'express';
import { getUserById } from '../../domain/services/getUserById';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operaciones relacionadas con usuarios
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123"
 *                 name:
 *                   type: string
 *                   example: "John Doe"
 *                 email:
 *                   type: string
 *                   example: "john@example.com"
 *       400:
 *         description: Error al buscar el usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Usuario no encontrado"
 *       500:
 *         description: Error interno del servidor
 */
export function getUser(req: Request, res: Response) {
  try {
    const user = getUserById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
}
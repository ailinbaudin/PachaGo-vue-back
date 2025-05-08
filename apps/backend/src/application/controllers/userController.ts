import { Request, Response } from 'express';
import { getUserById } from '../../domain/services/getUserById';

export function getUser(req: Request, res: Response) {
  try {
    const user = getUserById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
}

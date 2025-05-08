import { Request, Response, NextFunction } from 'express';

export const notFoundHandler = (req: Request, res: Response, _next: NextFunction) => {
  res.status(404).json({
    message: `🔍 Ruta no encontrada: ${req.originalUrl}`,
  });
};
export const notFoundHandlerSwagger = (req: Request, res: Response, _next: NextFunction) => {
  res.status(404).json({
    message: `🔍 Ruta no encontrada: ${req.originalUrl}`,
  });
};
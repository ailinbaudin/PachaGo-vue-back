import { Request, Response, NextFunction } from 'express';
import { logger } from '../../infrastructure/config/logger';
import { ApiError } from '../errors/ApiError';

export function errorHandler(
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      error: {
        message: err.message,
        details: err.details,
      },
    });
  }

  logger.error('Unhandled error:', err);
  res.status(500).json({
    error: {
      message: 'Internal Server Error',
    },
  });
}
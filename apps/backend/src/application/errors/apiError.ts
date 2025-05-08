export class ApiError extends Error {
    statusCode: number;
    details?: unknown;
  
    constructor(statusCode: number, message: string, details?: unknown) {
      super(message);
      this.name = 'ApiError';
      this.statusCode = statusCode;
      this.details = details;
  
      // Captura el stack trace si está disponible
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
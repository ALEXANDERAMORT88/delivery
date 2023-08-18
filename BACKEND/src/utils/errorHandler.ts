// utils/errorHandler.ts

import { Request, Response, NextFunction } from 'express';

interface CustomError {
  code: number;
  message: string;
  errorMessage?: string; // Agregar mensaje de error detallado opcional
}

function errorHandler(err: CustomError, req: Request, res: Response, next: NextFunction) {
  console.error(err);

  const statusCode = err.code || 500;
  const errorMessage = err.message || 'Internal Server Error';
  const detailedErrorMessage = err.errorMessage || '';

  res.status(statusCode).json({ error: errorMessage, details: detailedErrorMessage });
}

export { errorHandler };

// src/middleware/auth.middleware.ts

// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// // Extiende la interfaz Request para incluir la propiedad user
// interface AuthenticatedRequest extends Request {
//   user: string; // Cambia el tipo según tu estructura
// }

// function authenticate(req: AuthenticatedRequest, res: Response, next: NextFunction) {
//   const authToken = req.headers.authorization;

//   if (!authToken) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   const token = authToken.split(' ')[1];
//   try {
//     const decodedToken = jwt.verify(token, 'your-secret-key') as { user: string }; // Cambia el tipo según tu estructura
//     req.user = decodedToken.user; // Establecer el usuario autenticado en el objeto de solicitud
//     next();
//   } catch (error) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }
// }

// export { authenticate };

// src/middleware/authorization.middleware.ts

import { Request, Response, NextFunction } from 'express';

// Extiende la interfaz Request para incluir la propiedad user con la estructura correcta
interface AuthorizedRequest extends Request {
  user: {
    id: string;
    role: string; // Asegúrate de que esta propiedad esté en tu objeto de usuario autenticado
    // Otros campos del usuario autenticado
  };
}

function authorize(allowedRoles: string[]) {
  return (req: AuthorizedRequest, res: Response, next: NextFunction) => {
    const user = req.user; // Accede al objeto de usuario autenticado en req.user
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    next();
  };
}

export { authorize };

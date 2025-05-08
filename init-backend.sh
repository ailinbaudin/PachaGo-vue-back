#!/bin/bash

cd apps/backend || exit 1

# Crear estructura de carpetas basada en la arquitectura hexagonal
mkdir -p src/{application/{controllers,routes,middlewares},domain/{entities,repositories,services},infrastructure/{db,config,repositories}}

# index.ts
cat <<'EOF' > src/index.ts
import express from 'express';
import userRoutes from './application/routes/userRoutes';

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`🚀 Server running on port \${PORT}\`);
});
EOF

# Entidad User
cat <<'EOF' > src/domain/entities/User.ts
export class User {
  constructor(public id: string, public name: string) {
    if (!name) throw new Error('Name is required');
  }
}
EOF

# Servicio getUserById
cat <<'EOF' > src/domain/services/getUserById.ts
import { User } from '../entities/User';

export function getUserById(id: string): User {
  // Simulación de acceso a datos
  return new User(id, 'Usuario de ejemplo');
}
EOF

# Controlador
cat <<'EOF' > src/application/controllers/userController.ts
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
EOF

# Ruta
cat <<'EOF' > src/application/routes/userRoutes.ts
import { Router } from 'express';
import { getUser } from '../controllers/userController';

const router = Router();
router.get('/:id', getUser);

export default router;
EOF

echo "✅ Estructura hexagonal generada con ejemplo de 'getUser'."
echo "➡️ Ejecutá 'cd apps/backend && pnpm dev' para iniciar el servidor."

import { User } from '../entities/User';

export function getUserById(id: string): User {
  // Simulación de acceso a datos
  return new User(id, 'Usuario de ejemplo');
}

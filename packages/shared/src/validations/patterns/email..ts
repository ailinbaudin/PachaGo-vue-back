/**
 * Verifica que el email contenga únicamente caracteres válidos:
 * letras (a-z, A-Z), números (0-9), y los símbolos permitidos en emails.
 *
 * Permite: letras, números, punto (.), guion (-), guion bajo (_), más (+), porcentaje (%) y arroba (@).
 */
export const regexEmailAllowedChars = /^[a-zA-Z0-9._%+-@]+$/;

/**
 * Verifica que el email contenga al menos un carácter antes del símbolo `@`.
 *
 * Ejemplo válido: "usuario@" → ✅
 * Ejemplo inválido: "@gmail.com" → ❌
 */
export const regexEmailHasLocalPart = /^[^@]+@/;

/**
 * Verifica que después del `@` haya un dominio con al menos un punto (`.`)
 * y que la parte después del punto tenga al menos dos letras.
 *
 * Ejemplo válido: "@gmail.com" → ✅
 * Ejemplo inválido: "@gmail" → ❌
 */
export const regexEmailHasDomainAndDot = /@[^@]+\.[a-zA-Z]{2,}$/;

/**
 * Verifica que la extensión del dominio contenga al menos dos letras.
 *
 * Ejemplo válido: ".com", ".org", ".ar" → ✅
 * Ejemplo inválido: ".c", "." → ❌
 */
export const regexEmailValidExtension = /\.[a-zA-Z]{2,}$/;

/**
 * Verifica que el email **no** contenga dos puntos consecutivos.
 *
 * Ejemplo inválido: "nombre..apellido@gmail.com" → ❌
 * Ejemplo válido: "nombre.apellido@gmail.com" → ✅
 */
export const regexEmailNoDoubleDot = /^(?!.*\.\.).*$/;

/**
 * Patrón completo (fallback) para validar que el email cumpla un formato básico estándar.
 *
 * Este regex incluye: parte local + @ + dominio + extensión.
 * No cubre todos los casos de la RFC oficial, pero funciona para uso general.
 */
export const regexEmailFull =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

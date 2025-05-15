/**
 * Verifica que la contraseña contenga al menos una letra minúscula (a-z)
 */
export const regexHasLowercase = /[a-z]/;

/**
 * Verifica que la contraseña contenga al menos una letra mayúscula (A-Z)
 */
export const regexHasUppercase = /[A-Z]/;

/**
 * Verifica que la contraseña contenga al menos un número (0-9)
 */
export const regexHasNumber = /\d/;

/**
 * Verifica que la contraseña contenga al menos un símbolo especial
 * (no alfanumérico): !@#$%^&*(),.?":{}|<>
 */
export const regexHasSymbol = /[^a-zA-Z0-9]/;

/**
 * Patrón completo opcional para contraseñas fuertes
 * (min 8, al menos una minúscula, una mayúscula y un número)
 */
export const regexPasswordStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

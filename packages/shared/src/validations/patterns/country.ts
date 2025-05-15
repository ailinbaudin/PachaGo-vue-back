/**
 * Lista de países válidos, donde cada clave representa el nombre del país (en español)
 * y su valor correspondiente es el código ISO 3166-1 alfa-2.
 *
 * Esta estructura permite:
 * - Validar si un país ingresado es aceptado
 * - Mapear nombres a sus códigos estándar
 * - Exportar valores legibles al frontend y almacenar códigos estandarizados en backend
 */
export const allowedCountries = {
  España: "ES",
  Suiza: "CH",
  Alemania: "DE",
  Italia: "IT",
  Portugal: "PT",
  Francia: "FR",
  Irlanda: "IE",
  Austria: "AT",
  Belgica: "BE",
  Noruega: "NO",
} as const;

/**
 * Tipo que representa únicamente los nombres de países definidos en `allowedCountries`.
 * Esto garantiza que cualquier variable del tipo `Country` solo pueda ser uno de esos países.
 *
 * Ejemplo válido:
 * ```ts
 * const pais: Country = "Francia"; // ✅
 * const otro: Country = "Brasil";  // ❌ error
 * ```
 */
export type Country = keyof typeof allowedCountries;

/**
 * Expresión regular generada dinámicamente a partir de las claves de `allowedCountries`.
 * Se usa para validar que un string ingresado coincida con alguno de los países válidos.
 * La validación es sensible a mayúsculas y minúsculas, por lo que se recomienda usar tal cual como se define.
 *
 * Ejemplo de uso:
 * ```ts
 * regexCountry.test("Francia"); // true
 * regexCountry.test("francia"); // false
 * regexCountry.test("BRASIL"); // false
 * ```
 */
export const regexCountry = new RegExp(
  `^(${Object.keys(allowedCountries).join("|")})$`
);

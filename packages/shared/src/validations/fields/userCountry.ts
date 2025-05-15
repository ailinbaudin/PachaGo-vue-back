import { z } from "zod";
import { zodCountry } from "../messages";
import { regexCountry } from "../patterns/country";

/**
 * Campo de país validado con:
 * - Mensajes personalizados
 * - Regex basado en `allowedCountries`
 * - Insensible a mayúsculas si el regex usa la flag "i"
 */
export const zodCountryField = z
  .string({
    required_error: zodCountry.required,
    invalid_type_error: zodCountry.invalid_type,
  })
  .trim()
  .regex(regexCountry, zodCountry.invalid_value);

export type Country = z.infer<typeof zodCountryField>;
import { z } from "zod";
import { zodAbout } from "../messages/user";

/**
 * Campo 'about' (biografía personal) validado con:
 * - Mensajes personalizados
 * - Límite de caracteres
 * - Campo opcional
 */
export const zodAboutField = z
  .string({
    invalid_type_error: zodAbout.invalid_type,
  })
  .max(1000, zodAbout.max_length)
  .optional();

export type UserAbout = z.infer<typeof zodAboutField>;

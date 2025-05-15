import { z } from "zod";
import { zodRole } from "../messages/user";

export enum UserRoleEnum {
  host = "host",
  exp = "exp",
}

/**
 * Campo validado:
 * - Acepta "HOST", "Exp", etc.
 * - Transforma a minúsculas
 * - Valida con nativeEnum
 * - Devuelve mensaje externo personalizado
 */
export const zodUserRoleField = z
  .string({
    required_error: zodRole.required,
    invalid_type_error: zodRole.invalid_type,
  })
  .transform((val) => val.toLowerCase().trim())
  .refine(
    (val): val is UserRoleEnum =>
      Object.values(UserRoleEnum).includes(val as UserRoleEnum),
    {
      message: zodRole.invalid_value,
    }
  );

export type UserRole = z.infer<typeof zodUserRoleField>;

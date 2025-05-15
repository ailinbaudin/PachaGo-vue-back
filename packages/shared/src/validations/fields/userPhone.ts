import { z } from "zod";
import { regexPhone } from "../patterns/phone";
import { zodPhone } from "../messages/user";

export const zodPhoneField = z
  .string({
    required_error: zodPhone.required,
    invalid_type_error: zodPhone.invalid_type,
  })
  .min(8, zodPhone.min_length)
  .max(20, zodPhone.max_length)
  .regex(regexPhone, zodPhone.invalid_format)
  .optional();

export type UserPhone = z.infer<typeof zodPhoneField>;


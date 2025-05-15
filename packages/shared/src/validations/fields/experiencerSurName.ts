import { z } from "zod";
import { zodSurname } from "../messages/experiencer";

export const zodSurnameField = z
  .string({
    required_error: zodSurname.required,
    invalid_type_error: zodSurname.invalid_type,
  })
  .min(2, zodSurname.min_length)
  .max(50, zodSurname.max_length);

export type SurnameField = z.infer<typeof zodSurnameField>;

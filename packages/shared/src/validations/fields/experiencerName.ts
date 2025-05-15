import { z } from "zod";
import { zodName } from "../messages/experiencer";

export const zodNameField = z
  .string({
    required_error: zodName.required,
    invalid_type_error: zodName.invalid_type,
  })
  .min(2, zodName.min_length)
  .max(50, zodName.max_length);

export type ZodNameField = z.infer<typeof zodNameField>;

import { z } from "zod";
import { zodLocation } from "../messages/experiencer";

export const zodLocationField = z
  .string({
    required_error: zodLocation.required,
    invalid_type_error: zodLocation.invalid_type,
  })
  .min(2, zodLocation.min_length)
  .max(100, zodLocation.max_length);

export type ZodLocationField = z.infer<typeof zodLocationField>;

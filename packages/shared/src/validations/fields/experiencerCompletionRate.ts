import { z } from "zod";
import { zodCompletionRate } from "../messages/experiencer";

export const zodCompletionRateField = z
  .number({
    invalid_type_error: zodCompletionRate.invalid_type,
  })
  .min(0, zodCompletionRate.min)
  .max(100, zodCompletionRate.max);

export type ZodCompletionRateField = z.infer<typeof zodCompletionRateField>;

import { z } from "zod";
import { zodCompanyName } from "../messages/host";

export const zodCompanyNameField = z
  .string({
    invalid_type_error: zodCompanyName.invalid_type,
  })

  .min(2, { message: zodCompanyName.min_length })
  .max(100, { message: zodCompanyName.max_length });

export type ZodCompanyNameField = z.infer<typeof zodCompanyNameField>;

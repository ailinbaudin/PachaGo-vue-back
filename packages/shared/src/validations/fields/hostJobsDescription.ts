import { z } from "zod";
import { zodJobsDescription } from '../messages/host';

export const zodJobsDescriptionField = z
  .string({
    invalid_type_error: zodJobsDescription.invalid_type,
  })
  .min(10, { message: zodJobsDescription.min_length })
  .max(2000, { message: zodJobsDescription.max_length });

  export type ZodJobsDescriptionField = z.infer<typeof zodJobsDescriptionField>;

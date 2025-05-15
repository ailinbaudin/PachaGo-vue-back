import { z } from "zod";
import { zodJobExperience } from "../messages/experiencer";

export const zodJobExperienceField = z
  .string({
    invalid_type_error: zodJobExperience.invalid_type,
  })
  .min(10, zodJobExperience.min_length)
  .max(2000, zodJobExperience.max_length);

export type ZodJobExperienceField = z.infer<typeof zodJobExperienceField>;

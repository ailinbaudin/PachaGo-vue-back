import { z } from "zod";
import { zodPreferredJobs } from "../messages/experiencer";

export const zodPreferredJobsField = z
  .array(z.string().min(1, zodPreferredJobs.item_required))
  .min(1, zodPreferredJobs.required);

export type ZodPreferredJobsField = z.infer<typeof zodPreferredJobsField>;

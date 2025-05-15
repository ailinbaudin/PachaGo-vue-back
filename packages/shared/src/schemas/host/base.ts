import { z } from "zod";
import {
  zodCompanyNameField,
  zodJobsDescriptionField,
} from "../../validations/fields";

export const HostBaseSchema = z.object({
  companyName: zodCompanyNameField,
  jobsDescription: zodJobsDescriptionField,
});

export type HostBase = z.infer<typeof HostBaseSchema>;

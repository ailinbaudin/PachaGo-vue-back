import { z } from "zod";
import {
  zodCompletionRateField,
  zodCvUrlField,
  zodJobExperienceField,
  zodLocationField,
  zodNameField,
  zodPreferredJobsField,
  zodSkillsField,
  zodSurnameField,
} from "../../validations/fields";

export const ExperiencerBaseSchema = z.object({
  name: zodNameField,
  surname: zodSurnameField,
  location: zodLocationField,
  cvUrl: zodCvUrlField,
  jobExperience: zodJobExperienceField,
  skills: zodSkillsField,
  preferredJobs: zodPreferredJobsField,
  completaionRate: zodCompletionRateField,
});

export type ExpreciencerBase = z.infer<typeof ExperiencerBaseSchema>;

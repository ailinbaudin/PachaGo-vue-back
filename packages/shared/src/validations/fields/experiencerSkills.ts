import { z } from "zod";
import { zodSkills } from "../messages/experiencer";

export const zodSkillsField = z
  .array(z.string().min(1, zodSkills.item_required))
  .min(1, zodSkills.required);

export type ZodSkillsField = z.infer<typeof zodSkillsField>;

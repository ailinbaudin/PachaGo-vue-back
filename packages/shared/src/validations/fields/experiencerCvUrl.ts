import { z } from "zod";
import { zodCvUrl } from "../messages/experiencer";

export const zodCvUrlField = z
  .string({
    invalid_type_error: zodCvUrl.invalid_type,
  })
  .url(zodCvUrl.invalid_format);

export type ZodCvUrlField = z.infer<typeof zodCvUrlField>;

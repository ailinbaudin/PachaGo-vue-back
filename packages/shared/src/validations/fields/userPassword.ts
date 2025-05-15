import { z } from "zod";
import { zodPassword } from "../messages";
import {
  regexHasLowercase,
  regexHasNumber,
  regexHasSymbol,
  regexHasUppercase,
} from "../patterns/password";

export const zodPasswordField = z
  .string({
    required_error: zodPassword.required,
    invalid_type_error: zodPassword.invalid_type,
  })
  .min(8, zodPassword.min_length)
  .max(20, zodPassword.max_length)
  .superRefine((val, ctx) => {
    if (!regexHasUppercase.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: zodPassword.missing_uppercase,
      });
    }

    if (!regexHasLowercase.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: zodPassword.missing_lowercase,
      });
    }

    if (!regexHasNumber.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: zodPassword.missing_number,
      });
    }

    if (!regexHasSymbol.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: zodPassword.missing_symbol,
      });
    }
  });

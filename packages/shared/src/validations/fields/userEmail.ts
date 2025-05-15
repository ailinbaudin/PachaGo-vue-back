import { z } from "zod";
import { zodEmail } from "../messages/user";
import {
  regexEmailAllowedChars,
  regexEmailHasLocalPart,
  regexEmailHasDomainAndDot,
  regexEmailValidExtension,
  regexEmailNoDoubleDot,
} from "../patterns/email.";

export const zodEmailField = z
  .string({
    required_error: zodEmail.required,
    invalid_type_error: zodEmail.invalid_type,
  })
  .min(3, zodEmail.min_length)
  .max(50, zodEmail.max_length)
  .superRefine((val, ctx) => {
    if (!regexEmailAllowedChars.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: zodEmail.invalid_chars,
      });
    }

    if (!regexEmailHasLocalPart.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: zodEmail.missing_local,
      });
    }

    if (!regexEmailHasDomainAndDot.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: zodEmail.missing_domain,
      });
    }

    if (!regexEmailValidExtension.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: zodEmail.invalid_extension,
      });
    }

    if (!regexEmailNoDoubleDot.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: zodEmail.double_dot,
      });
    }
  });

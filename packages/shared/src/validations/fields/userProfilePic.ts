import { z } from "zod";
import { zodProfilePicture } from "../messages";

/**
 * Valida que sea una URL válida y que pertenezca a Cloudinary
 */

// Regex para validar que la URL comience con "http://" o "https://"
// y que contenga "res.cloudinary.com" en la parte del dominio
const CLOUDINARY_URL = /^https?:\/\/res\.cloudinary\.com/;

export const zodProfilePictureField = z
  .string({
    invalid_type_error: zodProfilePicture.invalid_type,
  })
  .url(zodProfilePicture.invalid_format)
  .refine((url) => CLOUDINARY_URL.test(url), {
    message: zodProfilePicture.invalid_source,
  });

export type UserProfilePicture = z.infer<typeof zodProfilePictureField>;

import { z } from "zod";
import {
  zodEmailField,
  zodPasswordField,
  zodUserRoleField,
  zodPhoneField,
  zodCountryField,
  zodAboutField,
  zodProfilePictureField,
} from "../../validations/fields";

export const UserBaseSchema = z.object({
  email: zodEmailField,
  password: zodPasswordField,
  role: zodUserRoleField,
  phone: zodPhoneField,
  isVerified: z.boolean().optional(),
  country: zodCountryField,
  about: zodAboutField,
  isActive: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  lastlogin: z.date().optional(),
  profilePicture: zodProfilePictureField,
});

export type UserBase = z.infer<typeof UserBaseSchema>;

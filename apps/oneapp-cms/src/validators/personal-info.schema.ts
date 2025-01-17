import { z } from "zod";
import { fileSchema, validateEmail } from "./common-rules";
import { messages } from "@/config/messages";

// form zod validation schema
export const personalInfoFormSchema = (t: (arg: string) => string) =>
  z.object({
    first_name: z.string().min(1, { message: t(messages.firstNameRequired) }),
    last_name: z.string().optional(),
    email: validateEmail(t),
    avatar: fileSchema.optional(),
    role: z.string().optional(),
    country: z.string().optional(),
    timezone: z.string().optional(),
    bio: z.string().optional(),
    portfolios: z.array(fileSchema).optional(),
  });

// generate form types from zod validation schema
export type PersonalInfoFormTypes = z.infer<ReturnType<typeof personalInfoFormSchema>>;

export const defaultValues = {
  first_name: "",
  last_name: undefined,
  email: "",
  avatar: undefined,
  role: undefined,
  country: undefined,
  timezone: undefined,
  bio: undefined,
  portfolios: undefined,
};

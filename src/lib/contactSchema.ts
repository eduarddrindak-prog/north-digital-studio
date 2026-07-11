import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name."),

  email: z
    .email("Please enter a valid email address."),

  business: z
    .string()
    .min(2, "Please enter your business name."),

  message: z
    .string()
    .min(20, "Please provide a little more information about your project."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
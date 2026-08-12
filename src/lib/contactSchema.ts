import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name."),

  email: z.email("Please enter a valid email address."),

  company: z
    .string()
    .trim()
    .max(120, "Company name is too long.")
    .optional(),

  website: z
    .union([z.literal(""), z.url("Please enter a valid website URL.")])
    .optional(),

  projectType: z
    .string()
    .min(1, "Please select a project type."),

  timeline: z
    .string()
    .min(1, "Please select a timeline."),

  budget: z
    .string()
    .max(80, "Budget value is too long.")
    .optional(),

  details: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters about your project.")
    .max(5000, "Project details must be 5,000 characters or fewer."),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Shorts.validation: Module file for the Shorts.validation functionality.
// /lib/validation/shorts.ts
import { z } from "zod";

export const AddNewShortVideoValidationSchema = z.object({
  videoUrl: z.string().url().min(1, "videoUrl is required").max(200),
  title: z.string().min(1, "title is required").max(200),
  tags: z.array(z.string().min(1)).default([]),
});

export const ShortsValidation = {
  AddNewShortVideoValidationSchema,
};

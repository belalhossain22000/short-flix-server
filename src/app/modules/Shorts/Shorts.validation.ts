import { z } from "zod";

export const ShortsSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
    }),
});

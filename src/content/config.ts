import { defineCollection, z } from "astro:content";

const liturgy = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    week: z.string(),
    date: z.coerce.date(), // Transform string to Date object
    readings: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url().optional(),
        })
      )
      .optional(),
    // heroImage: z.string().optional(),
  }),
});

export const collections = { liturgy };

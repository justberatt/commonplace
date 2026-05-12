import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: ['**/*.mdx', '!**/_*/**'], base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    question: z.string(),
    description: z.string(),
    template: z.enum(['concept-explainer', 'comparison', 'myth-buster']),
    topics: z.array(z.string()),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };

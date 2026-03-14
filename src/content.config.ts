import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				projectId: z.string().min(1).optional(),
				projectTags: z.array(z.enum(['geode-mod', 'website', 'program'])).optional(),
				projectThumbnail: z.string().min(1).optional(),
				projectIcon: z.string().min(1).optional(),
				projectBadges: z.array(
					z.union([
						z.string().min(1),
						z.object({
							text: z.string().min(1),
							variant: z.enum(['note', 'tip', 'danger', 'caution', 'success', 'default']).default('default'),
						}),
					])
				).optional(),
			}),
		}),
	}),
};

import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.optional(z.string()),
      description: z.optional(z.string()),
      type: z.string(),
      lastUpdateDate: z.date(),
      hideTitle: z.optional(z.boolean()),
      hidden: z.optional(z.boolean()),
      cover: z.optional(image()),
      seo: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
      }),
    }),
});


const servicesCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			pubDate: z.date(),
			lastUpdateDate: z.date(),
			cover: z.optional(image()),
			description: z.string(),
			hidden: z.optional(z.boolean()),
		}),
});

const serviceDetailsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      lastUpdateDate: z.date(),
      cover: z.optional(image()),
      description: z.string(),
      hidden: z.optional(z.boolean()),
      contentType: z.literal("servicedetails"),
    }),
});

export const collections = {
	pages: pagesCollection,
	services: servicesCollection,
	servicedetails: serviceDetailsCollection,
};

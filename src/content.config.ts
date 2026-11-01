import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const practice = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/practice" }),
  schema: z.object({
    title: z.string(),
    titleTr: z.string(),
    order: z.number(),
    summary: z.string(),
    heroImage: z.string().optional(),
    detailImages: z.array(z.string()).default([]),
    keywords: z.array(z.string()).default([]),
  }),
});

const interiorProjects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/interior-projects" }),
  schema: z.object({
    title: z.string(),
    city: z.string(),
    cityTr: z.string().optional(),
    year: z.number(),
    category: z.enum(["Residential", "Commercial", "Hospitality", "Restoration"]),
    area: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    order: z.number().default(0),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(["Furniture", "Lighting", "Object", "Textile"]),
    material: z.string(),
    year: z.number(),
    summary: z.string(),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    detailImage: z.string().optional(),
    order: z.number().default(0),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faq" }),
  schema: z.object({
    question: z.string(),
    order: z.number(),
  }),
});

// Craft disciplines listed under "Capabilities" in the nav. Each entry is a
// full-width photo page; an empty `photos` list renders a "coming soon" note.
const capabilities = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/capabilities" }),
  schema: z.object({
    title: z.string(),
    titleTr: z.string(),
    order: z.number(),
    summary: z.string(),
    // Optional large statement shown at the top of the page.
    headline: z.string().optional(),
    // Optional intro shown under the headline in place of the summary
    // (the summary is still used for meta descriptions and index cards).
    intro: z.string().optional(),
    photos: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          width: z.number(),
          height: z.number(),
          // Optional text shown under the photo, one string per paragraph.
          caption: z.array(z.string()).optional(),
          // Optional titled block of side-by-side columns shown under the caption.
          columns: z
            .object({
              title: z.string(),
              // text is one paragraph, or an array of paragraphs.
              items: z.array(z.object({ title: z.string(), text: z.union([z.string(), z.array(z.string())]) })),
            })
            .optional(),
        })
      )
      .default([]),
  }),
});

export const collections = { practice, interiorProjects, products, faq, capabilities };

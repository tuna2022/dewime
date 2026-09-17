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

export const collections = { practice, interiorProjects, products, faq };

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    titleTr: z.string(),
    order: z.number(),
    summary: z.string(),
    heroImage: z.string().optional(),
    keywords: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    city: z.string(),
    cityTr: z.string().optional(),
    year: z.number(),
    category: z.enum(["Residential", "Commercial", "Interior", "Restoration"]),
    area: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
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

export const collections = { services, projects, faq };

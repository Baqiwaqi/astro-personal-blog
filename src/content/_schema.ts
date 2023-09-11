import { z } from 'astro:content'

export const blogSchema = z
   .object({
      author: z.string().optional(),
      pubDatetime: z.date(),
      title: z.string(),
      postSlug: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(['others']),
      ogImage: z.string().optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
   })
   .strict()

export type BlogFrontmatter = z.infer<typeof blogSchema>


export const workSchema = z.object({
   title: z.string(),
   description: z.string(),
   pubDatetime: z.date(),
   image: z.string(),
   tags: z.array(z.string()).default(['others']),
   url: z.string().optional(),
   github: z.string().optional(),
   featured: z.boolean().optional(),
   workSlug: z.string(),
})

export type WorkFrontmatter = z.infer<typeof workSchema>
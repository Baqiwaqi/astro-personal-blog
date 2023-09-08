import { defineCollection } from 'astro:content'
import { blogSchema } from './_schema'

const blogCollection = defineCollection({
   schema: blogSchema,
})

export const collections = {
   blog: blogCollection,
}

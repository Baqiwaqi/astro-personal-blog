import { defineCollection } from 'astro:content'
import { blogSchema, workSchema } from './_schema'

const blogCollection = defineCollection({
   schema: blogSchema,

})

const workCollection = defineCollection({
   schema: workSchema,
})

export const collections = {
   blog: blogCollection,
   work: workCollection,
}

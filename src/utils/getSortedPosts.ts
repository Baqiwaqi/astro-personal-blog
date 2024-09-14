import type { CollectionEntry } from 'astro:content'

export const getSortedPosts = (posts: CollectionEntry<'blog'>[]) =>
   posts
      .filter(({ data }) => !data.draft)
      .sort(
         (a, b) =>
            Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
            Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
      )

export const getSortedWorks = (works: CollectionEntry<'work'>[]) =>
   works
      .filter(({ data }) => !data.draft)
      .sort(
         (a, b) =>
            Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
            Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
      )

import type blogPosts from '@/data/blogPosts.json'
import type { IterableElement } from 'type-fest'

export type BlogPost = IterableElement<typeof blogPosts>

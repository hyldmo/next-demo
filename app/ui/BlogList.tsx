'use client'

import type { BlogPost } from '@/app/types'
import blogPosts from '@/data/blogPosts.json'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { FC } from 'react'

export interface BlogListProps {
	/** Set this to turn if blog list appears above the fold */
	priority?: boolean
}

export const BlogList: FC<BlogListProps> = ({ priority = false }) => {
	const posts: BlogPost[] = blogPosts

	return (
		<ul className="space-y-8">
			{posts.map(post => (
				<li key={post.slug} className="group transition-opacity hover:cursor-pointer hover:opacity-90">
					<Link href={`/blog/${post.slug}`} className="group block">
						<motion.div
							layoutId={`image-${post.slug}`}
							className="relative mb-2 h-48 w-full overflow-hidden rounded"
						>
							<div
								className="relative h-48 w-full overflow-hidden rounded"
								style={{
									backgroundImage: `url(${post.image})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundAttachment: 'fixed'
								}}
							/>
						</motion.div>
						<span className="font-medium text-xl group-hover:underline">{post.title}</span>
					</Link>
				</li>
			))}
		</ul>
	)
}

'use client'

import type { BlogPost } from '@/app/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { FC } from 'react'
interface BlogPostContentProps {
	post: BlogPost
	animate?: boolean
}

export const BlogPostContent: FC<BlogPostContentProps> = ({ post, animate = false }) => {
	return (
		<div className="max-h-screen overflow-scroll">
			<motion.div layoutId={`image-${post.slug}`} className="absolute top-0 left-0 h-full w-full">
				<Image src={post.image} alt={`Image for ${post.title}`} fill style={{ objectFit: 'cover' }} priority />
			</motion.div>
			<motion.div
				className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/80"
				initial={animate ? { opacity: 0 } : undefined}
				animate={animate ? { opacity: 1 } : undefined}
			/>
			<motion.article
				initial={animate ? { opacity: 0, y: '50%' } : undefined}
				animate={animate ? { opacity: 1, y: 0 } : undefined}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 15,
					delay: 0.05
				}}
				className="relative z-10 mx-auto mt-8 max-w-3xl space-y-12 p-8 text-white lg:mt-20"
			>
				<h1 className="text-center font-bold text-2xl leading-snug lg:text-5xl">{post.title}</h1>
				{post.content.map((paragraph, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: static data
					<p key={i} className="text-xl">
						{paragraph}
					</p>
				))}
			</motion.article>
		</div>
	)
}

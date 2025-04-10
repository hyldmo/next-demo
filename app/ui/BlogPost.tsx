import type { BlogPost } from '@/app/types'
import Image from 'next/image'
import type { FC } from 'react'

interface BlogPostContentProps {
	post: BlogPost
}

export const BlogPostContent: FC<BlogPostContentProps> = ({ post }) => {
	return (
		<div className="">
			<div className="absolute top-0 left-0 h-full w-full">
				<Image src={post.image} alt={`Image for ${post.title}`} fill style={{ objectFit: 'cover' }} priority />
			</div>
			<article className="relative z-10 mx-auto max-w-3xl p-8">
				<h1 className="mb-12 text-center font-bold text-5xl leading-snug">{post.title}</h1>
				<p>{post.content}</p>
			</article>
		</div>
	)
}

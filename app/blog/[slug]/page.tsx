import type { BlogPost } from '@/app/types'
import blogPosts from '@/data/blogPosts.json'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPostProps {
	params: Promise<{
		slug: string
	}>
}

function getPostBySlug(slug: string): BlogPost | undefined {
	return (blogPosts as BlogPost[]).find(post => post.slug === slug)
}

export async function generateStaticParams() {
	return (blogPosts as BlogPost[]).map(post => ({
		slug: post.slug
	}))
}

export default async function BlogPostPage(props: BlogPostProps) {
    const params = await props.params;
    const post = getPostBySlug(params.slug)

    if (!post) {
		notFound()
	}

    return (
		<div className="prose dark:prose-invert mx-auto max-w-4xl p-8">
			<div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg md:h-96">
				<Image
					src={post.image}
					alt={`Image for ${post.title}`}
					fill={true}
					style={{ objectFit: 'cover' }}
					priority={true}
				/>
			</div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
			<Link className="" href="/">
				X
			</Link>
		</div>
	)
}

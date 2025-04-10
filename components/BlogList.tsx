import type { BlogPost } from '@/app/types'
import blogPosts from '@/data/blogPosts.json'
import Image from 'next/image'
import Link from 'next/link'

export function BlogList() {
	const posts: BlogPost[] = blogPosts

	return (
		<ul className="space-y-8">
			{posts.map(post => (
				<li key={post.slug}>
					<Link href={`/blog/${post.slug}`} className="group block">
						<div className="relative mb-2 h-48 w-full overflow-hidden rounded">
							<Image
								src={post.image}
								alt={`Thumbnail for ${post.title}`}
								fill={true}
								style={{ objectFit: 'cover' }}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						<span className="font-medium text-blue-600 text-lg group-hover:underline dark:text-blue-400">
							{post.title}
						</span>
					</Link>
				</li>
			))}
		</ul>
	)
}

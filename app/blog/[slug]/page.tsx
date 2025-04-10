import { BlogPostContent } from '@/app/ui/BlogPost'
import blogPosts from '@/data/blogPosts.json'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	return blogPosts.map(post => ({
		slug: post.slug
	}))
}

interface BlogPostPageProps {
	params: Promise<{
		slug: string
	}>
}

export default async function BlogPostPage(props: BlogPostPageProps) {
	const params = await props.params
	const post = blogPosts.find(post => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	return (
		<main className="p-8 pt-20">
			<BlogPostContent post={post} />
		</main>
	)
}

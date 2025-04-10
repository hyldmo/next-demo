import { BlogPostContent } from '@/app/ui/BlogPost'
import { Modal } from '@/app/ui/Modal'
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
		<Modal animate={false}>
			<BlogPostContent post={post} animate={false} />
		</Modal>
	)
}

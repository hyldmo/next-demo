import { BlogPostContent } from '@/app/ui/BlogPost'
import { Modal } from '@/app/ui/Modal'
import blogPosts from '@/data/blogPosts.json'
import { notFound } from 'next/navigation'

interface InterceptedBlogPostProps {
	params: {
		slug: string
	}
}

export default async function InterceptedBlogPostPage(props: InterceptedBlogPostProps) {
	const params = await props.params
	const post = blogPosts.find(post => post.slug === params.slug)
	if (!post) {
		notFound()
	}

	return (
		<Modal>
			<BlogPostContent post={post} />
		</Modal>
	)
}

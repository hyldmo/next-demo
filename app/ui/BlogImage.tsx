import type { BlogPost } from '@/app/types'
import type { FC } from 'react'

export interface BlogImageProps {
	post: BlogPost
	fullScreen?: boolean
	priority?: boolean
}

export const BlogImage: FC<BlogImageProps> = ({ post }) => {
	return (
		<div
			className="relative h-48 w-full overflow-hidden rounded"
			style={{
				backgroundImage: `url(${post.image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed'
			}}
		/>
	)
}

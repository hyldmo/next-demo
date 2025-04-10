import { BlogList } from '@/components/BlogList'

export default function Home() {
	return (
		<main className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
			<h1 className="text-3xl">My Travel Blog</h1>
			<div className="row-start-2 space-y-8">
				<BlogList />
			</div>
		</main>
	)
}

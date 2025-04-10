'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, type ReactNode } from 'react'

interface ModalProps {
	children: ReactNode
	animate?: boolean
	layoutId?: string
}

export function Modal({ children, animate = true, layoutId }: ModalProps) {
	const router = useRouter()
	const dialogRef = useRef<HTMLDialogElement>(null)

	const goBack = useCallback(() => {
		// If history length is 2 or less (current page + potentially the page that opened the modal),
		// assume there's no meaningful back navigation and go home.
		if (window.history.length <= 2) {
			router.push('/')
		} else {
			router.back()
		}
	}, [router])

	useEffect(() => {
		dialogRef.current?.showModal()
		return () => {
			dialogRef.current?.close()
		}
	}, [])

	return (
		<dialog
			ref={dialogRef}
			className="fixed inset-0 z-50 flex max-h-none max-w-none items-center justify-center bg-transparent"
			onClose={goBack}
			aria-modal="true"
		>
			<button
				type="button"
				className="absolute top-5 right-5 z-60 text-4xl text-white hover:text-gray-300"
				onClick={goBack}
				aria-label="Close modal"
			>
				X
			</button>
			<motion.div
				layoutId={layoutId}
				initial={animate ? { scale: 0.0, opacity: 1 } : undefined}
				animate={animate ? { scale: 1, opacity: 1 } : undefined}
				transition={{ type: 'spring', stiffness: 260, damping: 20 }}
				className="relative h-screen w-screen overflow-hidden"
				role="presentation"
			>
				{children}
			</motion.div>
		</dialog>
	)
}

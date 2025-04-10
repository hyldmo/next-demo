'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, type ReactNode } from 'react'

interface ModalProps {
	children: ReactNode
}

export function Modal({ children }: ModalProps) {
	const router = useRouter()
	const dialogRef = useRef<HTMLDialogElement>(null)

	const goBack = useCallback(() => router.back(), [router])

	useEffect(() => {
		dialogRef.current?.showModal()
		return () => {
			dialogRef.current?.close()
		}
	}, [])

	return (
		<dialog
			ref={dialogRef}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 pt-20 backdrop:bg-transparent"
			onClose={goBack}
			aria-modal="true"
		>
			<button
				type="button"
				className="absolute top-5 right-5 z-10 text-4xl text-white hover:text-gray-300"
				onClick={goBack}
				aria-label="Close modal"
			>
				X
			</button>
			<motion.div
				initial={{ scale: 0.5, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ type: 'spring', stiffness: 260, damping: 20 }}
				className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-900"
				role="presentation"
			>
				{children}
			</motion.div>
		</dialog>
	)
}

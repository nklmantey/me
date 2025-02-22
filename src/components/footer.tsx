'use client'

import Link from 'next/link'
import { AnimatedUnderline } from './ui'
import Image from 'next/image'
import { FadeIn } from '@/components/ui'

export function Footer() {
	return (
		<div className='flex w-full justify-center border-t pb-4 border-tertiary text-secondary'>
			<FadeIn delay={0.8} className='flex w-full max-w-screen-2xl items-center justify-between p-4'>
				<Link prefetch className='group font-ei transition-all hover:text-white focus:text-white' href='/'>
					<AnimatedUnderline>Mantey</AnimatedUnderline>
				</Link>
				<div className='flex items-center gap-2'>
					<Image
						priority
						fetchPriority='high'
						src='/icons/checkmark.svg'
						width={16}
						height={16}
						alt='updated icon'
						className='animate-pulse duration-1000 transition-all mb-0.5'
					/>
					Updated 15/02/2025
				</div>
			</FadeIn>
		</div>
	)
}

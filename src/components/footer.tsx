import Link from 'next/link'
import { AnimatedUnderline } from './ui'
import { FadeIn } from '@/components/ui'

export function Footer() {
	return (
		<div className='flex w-full justify-center border-t pb-4 border-tertiary text-secondary'>
			<FadeIn delay={0.8} className='flex w-full max-w-screen-2xl items-center justify-between p-4'>
				<Link prefetch className='group font-ei transition-all hover:text-white focus:text-white' href='/'>
					<AnimatedUnderline>
						<span className='font-ei text-2xl text-balance'>Mantey</span>
					</AnimatedUnderline>
				</Link>
				<div className='flex items-center gap-2'>
					<span className='relative flex h-2 w-2'>
						<span className='absolute inline-flex size-full animate-ping rounded-full opacity-75 bg-green'></span>
						<span className='relative inline-flex h-2 w-2 rounded-full bg-green'></span>
					</span>
					Updated 22/03/2025
				</div>
			</FadeIn>
		</div>
	)
}

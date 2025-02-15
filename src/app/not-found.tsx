import { FadeIn } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
	return (
		<FadeIn delay={0.1} className='flex items-center justify-center w-screen min-h-screen fixed'>
			<div className='flex flex-col gap-8 max-w-sm'>
				<Link
					href='/'
					prefetch
					className='flex bg-transparent border-tertiary text-secondary rounded-lg px-4 py-1 gap-2 w-fit items-center justify-center text-base border border-b-[4px] transition-all'
				>
					<Image priority fetchPriority='high' src='/icons/back.svg' alt='back-icon' width={20} height={20} />
				</Link>
				<p className='font-ei text-4xl font-semibold text-balance'>Page Not Found</p>
				<p className='text-secondary text-base text-pretty'>
					Looks like you've ventured into uncharted territory - the page you're looking for may have been moved, deleted, or never existed
					in the first place.
				</p>
			</div>
		</FadeIn>
	)
}

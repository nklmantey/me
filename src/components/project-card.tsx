'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getStars, StarCount } from '@/api'
import { AnimatedUnderline } from './ui/animated-underline'

type ProjectCardProps = {
	id: number
	keyId: string
	projectName: string
	year: string
	description: string
	image: string
	href: string
	tags: string[]
}

export function ProjectCard({ id, keyId, href, image, projectName, description, year, tags }: ProjectCardProps) {
	const [stars, setStars] = useState<StarCount[]>([])
	const isOpenSource = tags.includes('Open Source')

	useEffect(() => {
		if (isOpenSource) {
			getStars().then((starCounts) => setStars(starCounts))
		}
	}, [isOpenSource, keyId])

	const iconsMap = {
		Personal: '/icons/person-star.svg',
		Work: '/icons/work.svg',
		Beta: '/icons/half-time.svg',
		'Open Source': '/icons/package-open.svg',
	}

	return (
		<Link prefetch href={href} target='_blank' className='group z-0 focus:outline-none mt-8'>
			{/* PROJECT PREVIEW IMAGE */}
			<div className='relative -z-10 aspect-video w-full bg-tertiary bg-cover bg-center'>
				<Image
					src={image}
					priority
					fetchPriority='high'
					alt={projectName}
					width={2560}
					height={1440}
					draggable={false}
					className='z-0 h-full w-full object-cover saturate-150 select-none pointer-events-none'
					style={{ color: 'transparent' }}
				/>
				<Image
					src={image}
					priority
					fetchPriority='high'
					alt={projectName}
					width={2560}
					height={1440}
					draggable={false}
					className='absolute left-0 top-0 -z-10 h-full w-full object-cover opacity-0 blur-3xl saturate-200 duration-300 sm:group-hover:opacity-75 sm:group-focus:opacity-75 select-none pointer-events-none'
					style={{ color: 'transparent' }}
				/>
			</div>

			<div className='mt-4 flex items-center gap-1'>
				<AnimatedUnderline>{projectName}</AnimatedUnderline>
				<span className='text-secondary'>⎯ {year}</span>
			</div>

			<span className='text-secondary'>{description}</span>

			<div className='mt-2 flex items-center gap-2'>
				{tags.map((tag) => (
					<div key={tag} className='flex bg-tertiary text-secondary rounded px-2 py-1 gap-1 w-fit items-center justify-center text-xs'>
						<Image src={iconsMap[tag as keyof typeof iconsMap]} alt='back-icon' width={14} height={14} />
						<span className='mt-0.5'>{tag}</span>
					</div>
				))}

				{isOpenSource ? (
					stars.length > 0 ? (
						stars.map((star) => {
							const projectKey = star.key

							if (keyId === projectKey)
								return (
									<div className='flex bg-tertiary text-secondary rounded px-2 py-1 gap-1 w-fit items-center justify-center text-xs'>
										<Image src='/icons/star.svg' alt='star-icon' width={14} height={14} />
										<span className='mt-0.5'>{star.stargazers_count.toLocaleString()} stars</span>
									</div>
								)
						})
					) : (
						<div className='flex bg-tertiary text-secondary rounded px-2 py-1 gap-1 w-fit items-center justify-center text-xs'>
							<Image src='/icons/star.svg' alt='star-icon' width={14} height={14} />
							Fetching stars...
						</div>
					)
				) : null}
			</div>
		</Link>
	)
}

import Image from 'next/image'
import Link from 'next/link'

import { ProjectCard, Footer } from '@/components'
import { projects, socials } from '@/constants'
import { AnimatedUnderline } from '@/components/ui/'
import { FadeIn, LocalTime } from '@/components/ui'

export default function Home() {
	return (
		<div className='relative z-0 flex min-h-screen w-full flex-col items-center gap-20'>
			<div className='flex max-w-screen-2xl flex-col px-4'>
				<div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4'>
					{/* NAME AND SOCIAL ICONS */}
					<FadeIn delay={0.1}>
						<div className='flex flex-1 flex-col justify-between gap-4'>
							<span className='font-ei text-2xl italic text-balance'>Mantey</span>

							<div className='flex items-center gap-2'>
								{socials.map((social) => (
									<Link target='_blank' prefetch href={social.href} key={social.id}>
										<Image
											className='hover:-translate-y-1 transition-all duration-300'
											priority
											fetchPriority='high'
											src={social.icon}
											alt='icon'
											width={24}
											height={24}
										/>
									</Link>
								))}
							</div>
						</div>
					</FadeIn>

					{/* ABOUT */}
					<FadeIn delay={0.2}>
						<div className='flex flex-1 flex-col justify-between gap-4'>
							<span className='group hover:cursor-pointer text-pretty'>
								I'm a multi-faceted{' '}
								<AnimatedUnderline className='font-ei font-semibold sm:tracking-tight md:tracking-wide text-base'>
									software engineer
								</AnimatedUnderline>{' '}
								based in Ghana. When I'm not coding, I enjoy binge-watching anime or reading manga.
							</span>
							<span className='group hover:cursor-pointer text-pretty'>
								Experienced in driving products{' '}
								<AnimatedUnderline className='font-ei font-semibold sm:tracking-tight md:tracking-wide text-base'>
									from concept to production
								</AnimatedUnderline>{' '}
								while optimizing existing solutions across{' '}
								<AnimatedUnderline className='font-ei font-semibold sm:tracking-tight md:tracking-wide text-base'>
									business
								</AnimatedUnderline>{' '}
								and{' '}
								<AnimatedUnderline className='font-ei font-semibold sm:tracking-tight md:tracking-wide text-base'>
									engineering
								</AnimatedUnderline>{' '}
								teams. I contribute to open source repos too.
							</span>
						</div>
					</FadeIn>
				</div>

				{/* LOCATION */}
				<div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4'>
					<FadeIn delay={0.3}>
						<span className='group sm:max-w-xs lg:max-w-none text-balance'>
							📍 Currently in{' '}
							<Link href='https://maps.apple.com/?q=Singapore' prefetch target='_blank'>
								<AnimatedUnderline className='hover:cursor-pointer'>Singapore, </AnimatedUnderline>
							</Link>
							local time here is <LocalTime />
						</span>
					</FadeIn>

					<FadeIn delay={0.4}>
						<div className='group z-0 focus:outline-none'>
							<div className='relative -z-10 aspect-video w-full bg-tertiary bg-cover bg-center'>
								<Image
									src='/images/singapore.png'
									priority
									fetchPriority='high'
									alt='Singapore'
									width={2560}
									height={1440}
									draggable={false}
									className='z-0 h-full w-full object-cover object-[50%_80%] select-none pointer-events-none'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw'
									style={{ color: 'transparent' }}
								/>
								<Image
									src='/images/singapore.png'
									priority
									fetchPriority='high'
									alt='Singapore'
									width={2560}
									height={1440}
									draggable={false}
									className='absolute left-0 top-0 -z-10 h-full w-full object-cover object-[50%_80%] opacity-0 blur-3xl saturate-150 duration-300 sm:group-hover:opacity-75 sm:group-focus:opacity-75 select-none pointer-events-none'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw'
									style={{ color: 'transparent' }}
								/>

								<div>
									<span className='absolute left-[40%] top-[60%] z-10 -ml-10 -mt-10 md:-ml-12 md:-mt-12 block size-20 md:size-24 animate-ping rounded-full bg-green duration-1000' />
									<Image
										src='/images/me.png'
										priority
										fetchPriority='high'
										alt='avatar'
										width={2560}
										height={1440}
										draggable={false}
										className='absolute left-[40%] top-[60%] z-10 size-16 md:size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 select-none pointer-events-none'
									/>
								</div>
							</div>
						</div>
					</FadeIn>
				</div>

				{/* PROJECTS */}
				<div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-12'>
					{projects.map((project, index) => (
						<FadeIn key={project.id} delay={0.5 + index * 0.1}>
							<ProjectCard {...project} />
						</FadeIn>
					))}
				</div>
			</div>

			{/* FOOTER */}
			<Footer />
		</div>
	)
}

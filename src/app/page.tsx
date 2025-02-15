import { ProjectCard } from '@/components'
import { projects, socials } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='px-4 lg:px-8 xl:px-12'>
			{/* HEADER */}
			<div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
				{/* NAME AND SOCIAL ICONS */}
				<div className='flex flex-1 md:flex-col justify-between gap-4'>
					<span className='font-ei text-2xl italic text-balance'>Mantey</span>

					<div className='flex items-center gap-4'>
						{socials.map((social) => (
							<Link href={social.href} key={social.id}>
								<Image src={social.icon} alt='icon' width={24} height={24} />
							</Link>
						))}
					</div>
				</div>

				{/* DESCRIPTION */}
				<div className='flex flex-1 flex-col justify-between gap-4'>
					<span className='text-lg text-pretty leading-tight'>
						I'm a multi-faceted{' '}
						<span className='font-ei font-semibold hover:underline hover:cursor-pointer text-base'>software engineer</span> based in Ghana.
						When I'm not coding, I enjoy binge-watching anime or reading manga.
					</span>
					<span className='text-pretty'>
						I have over <span className='font-ei font-semibold hover:underline hover:cursor-pointer text-base'>5 years of experience </span>
						collaborating with{' '}
						<span className='font-ei font-semibold hover:underline hover:cursor-pointer text-base'>business and engineering teams</span> to
						push products from{' '}
						<span className='font-ei font-semibold hover:underline hover:cursor-pointer text-base'>concept to production</span>, while
						continuously optimizing existing solutions.
					</span>
				</div>
			</div>

			<div className='mt-12 py-8 grid grid-cols-1 md:grid-cols-2 gap-12'>
				{projects.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</div>
	)
}

import Image from 'next/image'

type ProjectCardProps = {
	id: number
	projectName: string
	year: string
	description: string
}

export function ProjectCard({ id, projectName, description, year }: ProjectCardProps) {
	return (
		<div className='flex flex-1 flex-col gap-4'>
			{/* PROJECT PREVIEW IMAGE */}
			<div className='w-full h-96 object-cover z-0 bg-black' />

			<div className='flex flex-col'>
				<span className='inline hover:underline'>
					{projectName} <span className='text-[#aaa]'>⎯ {year}</span>
				</span>
				<span className='inline hover:underline'>{description}</span>
			</div>
		</div>
	)
}

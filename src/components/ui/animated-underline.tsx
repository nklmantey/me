interface AnimatedUnderlineProps {
	children: React.ReactNode
	className?: string
}

export function AnimatedUnderline({ children, className = '' }: AnimatedUnderlineProps) {
	return (
		<span
			className={`relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-current after:content-[""] group-hover:after:animate-line group-focus:after:animate-line ${className}`}
		>
			{children}
		</span>
	)
}

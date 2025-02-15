'use client'

import { useEffect, useState } from 'react'
import { AnimatedUnderline } from './animated-underline'

export function LocalTime() {
	const [time, setTime] = useState<string>('')

	useEffect(() => {
		const updateTime = () => {
			const singaporeTime = new Date().toLocaleTimeString('en-US', {
				timeZone: 'Asia/Singapore',
				hour: 'numeric',
				minute: '2-digit',
				hour12: true,
			})
			setTime(singaporeTime)
		}

		updateTime()

		const interval = setInterval(updateTime, 1000)

		return () => clearInterval(interval)
	}, [])

	return <AnimatedUnderline>{time}</AnimatedUnderline>
}

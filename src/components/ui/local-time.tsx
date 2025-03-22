'use client'

import { useEffect, useState } from 'react'
import { AnimatedUnderline } from './animated-underline'

export function LocalTime() {
	const [time, setTime] = useState<string>('')

	useEffect(() => {
		const updateTime = () => {
			const time = new Date().toLocaleTimeString('en-US', {
				timeZone: 'Africa/Accra',
				hour: 'numeric',
				minute: '2-digit',
				hour12: true,
			})
			setTime(time)
		}

		updateTime()

		const interval = setInterval(updateTime, 1000)

		return () => clearInterval(interval)
	}, [])

	return <AnimatedUnderline>{time}</AnimatedUnderline>
}

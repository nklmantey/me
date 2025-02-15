export type StarCount = {
	key: string
	stargazers_count: number
}

export async function getStars(): Promise<StarCount[]> {
	const urls = [
		'https://github.com/twentyhq/twenty',
		'https://github.com/coral-xyz/backpack',
		'https://github.com/bigcapitalhq/bigcapital',
		'https://github.com/useplunk/plunk',
	]

	const results = await Promise.all(
		urls.map(async (url) => {
			const [, , , owner, repo] = url.split('/')
			const apiUrl = `https://api.github.com/repos/${owner}/${repo}`

			try {
				const response = await fetch(apiUrl, {
					headers: {
						Accept: 'application/vnd.github.v3+json',
					},
				})

				if (!response.ok) throw new Error(`GitHub API error: ${response.statusText}`)

				const data = await response.json()
				return {
					key: repo.toLowerCase(),
					stargazers_count: data.stargazers_count,
				}
			} catch (error) {
				console.error(`Error fetching stars for ${repo}:`, error)
				return { key: repo.toLowerCase(), stargazers_count: 0 }
			}
		})
	)

	return results
}

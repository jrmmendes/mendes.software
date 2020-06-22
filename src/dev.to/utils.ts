import { Article } from './article.interface'

const monthNames = [
  'JAN', 'FEB', 'MAR',
  'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP',
  'OCT', 'NOV', 'DEC',
]

const formatTimestamp = (s: string) => {
  const date = new Date(s)
  const month = monthNames[date.getUTCMonth()]
  const day = date.getUTCDay()
  const year = date.getUTCFullYear()

  return `${day} ${month}, ${year}`
}

export const articleToBlogCard = (data: Article[]) => data.map(post => ({
  link: post.url,
  tags: post.tag_list.slice(0,2),
  briefing: post.description,
  title: post.title,
  timestamp: formatTimestamp(post.published_at),
  color: 'white',
}))

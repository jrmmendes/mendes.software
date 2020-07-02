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

const getColor = (tags: string[]): string => {
  if (tags.includes('javascript')) return '#F7DF1E';
  if (tags.includes('typescript')) return '#007ACC';
  if (tags.includes('docker')) return '#2496ED';
  if (tags.includes('jest')) return '#C21325';
  if (tags.includes('aws')) return '#FF9900';
  return 'white';
}

export const articleToBlogCard = (data: Article[]) => data.map(post => ({
  link: post.url,
  tags: post.tag_list.slice(0,2),
  briefing: post.description,
  title: post.title,
  timestamp: formatTimestamp(post.published_at),
  color: getColor(post.tag_list.slice(0,2)),
}))

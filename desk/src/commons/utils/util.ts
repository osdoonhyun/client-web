import { DateTime } from 'luxon'

/** 예시) 2023.05.02. 13:22 */
export const getConvertedDate = (value: string) => {
  const date = new Date(value)
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  const t = `${date.getHours()}:${date.getMinutes()}`

  return `${yyyy}.${mm}.${dd}. ${t}`
}

/** 예시) 지금, 1분 전, 1시간 전 */
export function getDateToRelative(value: string) {
  if (DateTime.fromISO(value).diffNow().as('seconds') > -30) {
    return '지금'
  }

  return DateTime.fromISO(value).toRelative()
}

// formatNumber - 조회수
export const formatNumber = (number: number): string => {
  return Intl.NumberFormat().format(number)
}

// 유저 상대 경로 -> 절대 URL
export const makeAbsoluteUrl = (url: string) => {
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`
  }
  return url
}

export const JOB_LIST = [
  { shortName: 'IT', fullName: 'IT', bg: 'teal.500' },
  { shortName: '마케팅', fullName: '마케팅/광고', bg: 'purple.400' },
  { shortName: '디자인', fullName: '디자인', bg: 'pink.400' },
  { shortName: '미디어', fullName: '미디어/엔터테인먼트', bg: 'green.400' },
  { shortName: '교육', fullName: '교육', bg: 'blue.500' },
  { shortName: '학생', fullName: '학생', bg: 'yellow.400' },
  { shortName: '기타', fullName: '기타', bg: 'gray.400' },
]

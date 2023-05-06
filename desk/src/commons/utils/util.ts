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

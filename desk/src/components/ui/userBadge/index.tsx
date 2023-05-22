import { Badge } from '@chakra-ui/react'
import { UserBadgeProps } from './types'

export const JOB_LIST = [
  { shortName: 'IT', fullName: 'IT', bg: 'teal.400' },
  { shortName: '마케팅', fullName: '마케팅/광고', bg: 'red.400' },
  { shortName: '디자인', fullName: '디자인', bg: 'orange.400' },
  { shortName: '미디어', fullName: '미디어/엔터테인먼트', bg: 'green.400' },
  { shortName: '교육', fullName: '교육', bg: 'blue.400' },
  { shortName: '학생', fullName: '학생', bg: 'purple.400' },
  { shortName: '기타', fullName: '기타', bg: 'gray.400' },
]

export default function UserBadge(props: UserBadgeProps) {
  return (
    <Badge
      bg={JOB_LIST.find(item => item.shortName === props.job)?.bg}
      color="white"
      textTransform="uppercase"
      fontWeight={'bold'}
      fontSize={{ base: '10px', md: 'xs' }}
      px="6px"
      py="3px"
      mx="3">
      {props.job}
    </Badge>
  )
}

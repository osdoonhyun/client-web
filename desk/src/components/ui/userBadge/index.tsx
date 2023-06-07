import { Badge } from '@chakra-ui/react'
import { UserBadgeProps } from './types'
import { JOB_LIST } from '@/src/commons/utils/util'

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

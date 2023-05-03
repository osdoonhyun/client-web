import { useAuth } from '@/src/commons/hooks/useAuth'
import { getConvertedDate } from '@/src/commons/utils/util'
import {
  Avatar,
  Badge,
  Button,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ProfileHeaderProps } from './types'

export default function ProfileHeader(props: ProfileHeaderProps) {
  const router = useRouter()
  const { isWrittenBy } = useAuth()

  const onClickMoveToUserPage = () => {
    router.push(`/${props.userData.id}`)
  }

  const onClickMoveToDetailPage = () => {
    router.push(`/boards/${props.boardId}/edit`)
  }

  return (
    <Flex justify={'space-between'} align={'center'}>
      <HStack spacing={'14px'} onClick={onClickMoveToUserPage} cursor={'pointer'}>
        <Avatar
          w={'40px'}
          h={'40px'}
          src={
            props.userData.picture ? props.userData.picture : 'https://bit.ly/broken-link'
          }
        />
        <Text fontWeight={700} fontSize={16}>
          {props.userData.nickName}
        </Text>
        <Badge bgColor="dPrimary" color="white" fontWeight={'bold'}>
          {props.userData.jobGroup}
        </Badge>
      </HStack>
      <HStack spacing={'20px'}>
        <Text
          fontSize={14}
          fontWeight={300}
          color={useColorModeValue('dGray.dark', 'dGray.light')}>
          {getConvertedDate(props.createdAt)}
        </Text>
        {isWrittenBy(props.userData.id) && (
          <Button
            bgColor="dPrimary"
            color="white"
            size={'sm'}
            onClick={onClickMoveToDetailPage}>
            게시물 수정하기
          </Button>
        )}
      </HStack>
    </Flex>
  )
}

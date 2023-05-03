import { getConvertedDate } from '@/src/commons/utils/util'
import { Avatar, Badge, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ProfileHeaderProps } from './types'

export default function ProfileHeader(props: ProfileHeaderProps) {
  const router = useRouter()

  const onClickMoveToUserPage = () => {
    router.push(`/${props.userData.id}`)
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
      <Text
        fontSize={14}
        fontWeight={300}
        color={useColorModeValue('dGray.dark', 'dGray.light')}>
        {getConvertedDate(props.createdAt)}
      </Text>
    </Flex>
  )
}

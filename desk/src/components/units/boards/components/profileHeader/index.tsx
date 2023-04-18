import { Avatar, Badge, Flex, HStack, Text } from '@chakra-ui/react'

export default function ProfileHeader() {
  return (
    <Flex justify={'space-between'} align={'center'}>
      <HStack spacing={18}>
        <Avatar src="https://bit.ly/broken-link" />
        <Text fontWeight={700} fontSize={16}>
          닉네임
        </Text>
        <Badge bgColor="dPrimary" color="white" fontWeight={'bold'}>
          직군
        </Badge>
      </HStack>
      <Text fontSize={16} fontWeight={600} color={'dGray.medium'}>
        2023.4.17
      </Text>
    </Flex>
  )
}

import { Avatar, HStack, Input, Text, VStack, useColorModeValue } from '@chakra-ui/react'

export default function BoardDetailCommentWriteUI() {
  return (
    <VStack align={'stretch'}>
      <HStack>
        <Text
          fontSize={16}
          fontWeight={700}
          color={useColorModeValue('dGray.dark', 'dGray.light')}>
          댓글
        </Text>
        <Text fontSize={16} fontWeight={700} color={'dPrimary'}>
          6
        </Text>
      </HStack>
      <HStack>
        <Avatar w={'40px'} h={'40px'} src={'https://bit.ly/broken-link'} />
        <Input
          bgColor={useColorModeValue('dGray.light', '#bababa1e')}
          color={useColorModeValue('dBlack', 'dGray.light')}
          // value={props.value}
          // onChange={props.onChangeInput}
          // readOnly={props.readonly ?? false}
          size="md"
          focusBorderColor="dPrimary"
          // maxLength={props.maxLength}
          // placeholder={`${props.maxLength}자까지 입력 가능합니다.`}
          _placeholder={{ color: 'dGray.medium' }}
        />
      </HStack>
    </VStack>
  )
}

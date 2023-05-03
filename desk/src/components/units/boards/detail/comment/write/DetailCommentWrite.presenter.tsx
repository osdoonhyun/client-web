import {
  Avatar,
  Button,
  Divider,
  HStack,
  Input,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { BoardDetailCommentWriteUIProps } from './DetailCommentWrite.types'
import { useAuth } from '@/src/commons/hooks/useAuth'

export default function BoardDetailCommentWriteUI(props: BoardDetailCommentWriteUIProps) {
  const { isLoggedIn, myUserInfo } = useAuth()

  return (
    <VStack align={'stretch'}>
      <Divider mt={'10px'} mb={'50px'} />
      <HStack>
        <Text
          fontSize={16}
          fontWeight={700}
          color={useColorModeValue('dGray.dark', 'dGray.light')}>
          댓글
        </Text>
        <Text fontSize={16} fontWeight={700} color={'dPrimary'}>
          {props.commentsCount}
        </Text>
      </HStack>
      <HStack pt={'10px'} spacing={'16px'}>
        <Avatar
          w={'34px'}
          h={'34px'}
          src={myUserInfo?.picture || 'https://bit.ly/broken-link'}
        />
        <Input
          bgColor={useColorModeValue('dGray.light', '#bababa1e')}
          color={useColorModeValue('dBlack', 'dGray.light')}
          value={props.inputComment}
          onChange={props.onChangeInputComment}
          size="md"
          focusBorderColor="dPrimary"
          isDisabled={!isLoggedIn}
          placeholder={
            isLoggedIn
              ? `칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다:)`
              : '댓글을 작성하려면 로그인을 해주세요.'
          }
          _placeholder={{ color: 'dGray.medium' }}
        />
        <Button
          bgColor={'dPrimary'}
          color={'dGray.light'}
          isDisabled={!isLoggedIn}
          isLoading={props.isCommentLoading}
          onClick={props.onClickCreateComment}>
          입력
        </Button>
      </HStack>
    </VStack>
  )
}

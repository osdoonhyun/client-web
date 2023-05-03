import { useAuth } from '@/src/commons/hooks/useAuth'
import {
  Flex,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineEye,
  AiOutlineHeart,
} from 'react-icons/ai'
import { CountStateWithLikeProps } from './types'
import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { TMutation } from '@/src/commons/types/generated/types'
import { UPDATE_BOARD_LIKER } from '../../detail/Detail.queries'

export default function CountStateWithLike(props: CountStateWithLikeProps) {
  const toast = useToast()
  const { myUserInfo } = useAuth()
  const [isSelectedLike, setIsSelectedLike] = useState(false)

  const [updateBoarLike] =
    useMutation<Pick<TMutation, 'updateBoardLiker'>>(UPDATE_BOARD_LIKER)

  useEffect(() => {
    const isSelectedLikeButtonByMe = props.likers.some(like => like.id === myUserInfo?.id)

    setIsSelectedLike(isSelectedLikeButtonByMe)
  }, [])

  const onClickLikeBoard = (boardId: string) => async () => {
    await updateBoarLike({ variables: { boardid: boardId } })
      .then(res => setIsSelectedLike(like => !like))
      .catch(error => {
        if (error instanceof Error) {
          toast({ title: '에러', description: `${error.message}`, status: 'error' })
        }
      })
  }

  return (
    <>
      <Flex justify={'space-between'} align={'center'}>
        <HStack spacing={2}>
          <HStack>
            <AiOutlineHeart />
            <Text
              fontSize={14}
              fontWeight={600}
              color={useColorModeValue('dGray.dark', 'dGray.medium')}>
              {props.likes}
            </Text>
          </HStack>
          <HStack>
            <AiOutlineEye />
            <Text
              fontSize={14}
              fontWeight={600}
              color={useColorModeValue('dGray.dark', 'dGray.medium')}>
              {props.views}
            </Text>
          </HStack>
          <HStack>
            <AiOutlineComment />
            <Text
              fontSize={14}
              fontWeight={600}
              color={useColorModeValue('dGray.dark', 'dGray.medium')}>
              {props.comments}
            </Text>
          </HStack>
        </HStack>
        <HStack>
          {isSelectedLike ? (
            <IconButton
              aria-label="Like"
              variant={'outline'}
              borderRadius={'full'}
              color={'dRed.500'}
              size={'sm'}
              icon={<AiFillHeart />}
              onClick={onClickLikeBoard(props.boardId)}
            />
          ) : (
            <IconButton
              aria-label="Like"
              variant={'outline'}
              borderRadius={'full'}
              color={'dRed.500'}
              size={'sm'}
              icon={<AiOutlineHeart />}
              onClick={onClickLikeBoard(props.boardId)}
            />
          )}
        </HStack>
      </Flex>
    </>
  )
}

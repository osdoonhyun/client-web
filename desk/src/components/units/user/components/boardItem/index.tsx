import {
  TMutation,
  TMutationUpdateBoardLikerArgs,
} from '@/src/commons/types/generated/types'
import { Box, Image, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useMutation } from '@apollo/client'
import { UPDATE_BOARD_LIKER } from './boardItem.queries'
import { useRouter } from 'next/router'

export type BoardItemProps = {
  index: number
  boardId: string
  imageUrl: string
  like: boolean
}

export default function BoardItem(props: BoardItemProps) {
  const toast = useToast()
  const router = useRouter()
  const [isLiked, setIsLiked] = useState(props.like)

  const [updateBoardLiker] = useMutation<
    Pick<TMutation, 'updateBoardLiker'>,
    TMutationUpdateBoardLikerArgs
  >(UPDATE_BOARD_LIKER)

  const onClickLikeButton = (boardId: string, index: number) => async () => {
    console.log('boardid', boardId, index)
    await updateBoardLiker({
      variables: {
        boardid: boardId,
      },
    })
      .then(isLiked => {
        setIsLiked(Boolean(isLiked))
      })
      .catch(error => {
        if (error instanceof Error) {
          toast({
            title: '에러',
            description: `${error.message}`,
            status: 'error',
            position: 'top',
          })
        }
      })
  }

  const onClickBoardItem = (boardid: string) => () => {
    router.push(`/boards/${boardid}`)
  }

  return (
    <Box key={props.index} pos="relative" cursor="pointer">
      <Image
        h="250px"
        width={'100%'}
        objectFit={'cover'}
        src={props.imageUrl ?? ''}
        bg="dGray"
        borderRadius="10px"
        onClick={onClickBoardItem(props.boardId)}
      />
      <Box
        pos="absolute"
        zIndex="2"
        top="88%"
        left="88%"
        _hover={
          isLiked
            ? {
                color: 'red.300',
              }
            : {
                color: 'dGray.medium',
              }
        }
        color={isLiked ? 'dRed.400' : '#fff'}
        onClick={onClickLikeButton(props.boardId, props.index)}>
        {isLiked ? <MdFavorite size="20px" /> : <MdFavoriteBorder size="20px" />}
      </Box>
    </Box>
  )
}

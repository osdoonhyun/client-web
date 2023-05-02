import {
  TMutation,
  TMutationUpdateBoardLikerArgs,
} from '@/src/commons/types/generated/types'
import { Box, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useMutation } from '@apollo/client'
import { UPDATE_BOARD_LIKER } from './boardItem.queries'

export type BoardItemProps = {
  index: number
  boardId: string
  imageUrl: string
  isLiked: boolean
}

export default function BoardItem(props: BoardItemProps) {
  const [updateBoardLiker] = useMutation<
    Pick<TMutation, 'updateBoardLiker'>,
    TMutationUpdateBoardLikerArgs
  >(UPDATE_BOARD_LIKER)

  const onClickLikeButton = async (boardid: string) => {
    await updateBoardLiker({
      variables: {
        boardid,
      },
    })
    setIsLiked(prevIsLiked => !prevIsLiked)
  }

  const [isLiked, setIsLiked] = useState(props.isLiked)

  return (
    <Box key={props.index} pos="relative">
      <Image
        h="250px"
        width={'100%'}
        objectFit={'cover'}
        src={props.imageUrl ?? ''}
        bg="dGray"
        borderRadius="10px"
      />
      <Box
        pos="absolute"
        zIndex="2"
        top="88%"
        left="88%"
        _hover={
          isLiked
            ? undefined
            : {
                color: 'dGray.medium',
              }
        }
        color={isLiked ? 'dRed.400' : '#fff'}
        onClick={() => onClickLikeButton(props.boardId)}>
        {isLiked ? <MdFavorite size="20px" /> : <MdFavoriteBorder size="20px" />}
      </Box>
    </Box>
  )
}

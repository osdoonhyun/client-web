import {
  TMutation,
  TMutationUpdateBoardLikerArgs,
} from '@/src/commons/types/generated/types'
import { useMutation } from '@apollo/client'
import { UPDATE_BOARD_LIKER } from './LiksButton.queries'
import { LikeButtonProps } from './LiksButton.types'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'

export default function LikeButton(props: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(props.isLiked)

  const [updateBoardLiker] = useMutation<
    Pick<TMutation, 'updateBoardLiker'>,
    TMutationUpdateBoardLikerArgs
  >(UPDATE_BOARD_LIKER)

  const onClickLikeButton = async (boardid: string) => {
    console.log('boardid', boardid)
    await updateBoardLiker({
      variables: {
        boardid,
      },
    })
    setIsLiked(prevIsLiked => !prevIsLiked)
  }

  return (
    <>
      <Box
        pos="absolute"
        zIndex="2"
        top="85%"
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
    </>
  )
}

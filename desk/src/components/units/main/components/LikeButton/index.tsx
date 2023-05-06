import {
  TMutation,
  TMutationUpdateBoardLikerArgs,
} from '@/src/commons/types/generated/types'
import { useMutation } from '@apollo/client'
import { UPDATE_BOARD_LIKER } from './LiksButton.queries'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { FETCH_BOARDS } from '../../categories/recent/Recent.queries'
import { LikeButtonProps } from './LiksButton.types'
import { useAuth } from '@/src/commons/hooks/useAuth'

export default function LikeButton(props: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(props.isLiked)
  const { currentUser, isLoggedIn, openModal } = useAuth()

  const [updateBoardLiker] = useMutation<
    Pick<TMutation, 'updateBoardLiker'>,
    TMutationUpdateBoardLikerArgs
  >(UPDATE_BOARD_LIKER)

  const onClickLikeButton = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (!isLoggedIn) {
      openModal('LOGIN')
    } else {
      // 로그인 상태일 때만 API 호출
      await updateBoardLiker({
        variables: {
          boardid: props.boardId,
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      }).then(result => {
        if (result.data) {
          setIsLiked(result.data.updateBoardLiker)
        } else {
          console.error('좋아요 업데이트에 실패했습니다.')
        }
      })
    }
  }

  return (
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
      onClick={onClickLikeButton}>
      {isLiked ? <MdFavorite size="20px" /> : <MdFavoriteBorder size="20px" />}
    </Box>
  )
}

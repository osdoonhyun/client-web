import { useAuth } from '@/src/commons/hooks/useAuth'
import { TMutation } from '@/src/commons/types/generated/types'
import Carousel from '@/src/components/ui/carousel'
import { useMutation } from '@apollo/client'
import { Box, HStack, IconButton, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { UPDATE_BOARD_LIKER } from '../../detail/Detail.queries'
import { DetailBoardImagesProps } from './types'

export default function DetailBoardImages(props: DetailBoardImagesProps) {
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
    <Box pos="relative" cursor="pointer">
      <Carousel imageURLs={props.imageURLs} />
      <HStack pos={'absolute'} zIndex={'1'} bottom={'25px'} right={'20px'}>
        {isSelectedLike ? (
          <IconButton
            aria-label="Like"
            variant={'ghost'}
            color={'dRed.500'}
            icon={<MdFavorite fontSize={'25px'} />}
            onClick={onClickLikeBoard(props.boardId)}
          />
        ) : (
          <IconButton
            aria-label="Like"
            variant={'ghost'}
            color={'dGray.light'}
            icon={<MdFavoriteBorder fontSize={'25px'} />}
            onClick={onClickLikeBoard(props.boardId)}
          />
        )}
      </HStack>
    </Box>
  )
}

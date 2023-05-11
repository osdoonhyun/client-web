import LikeBoardsUI from './Like.presenter'
import { useQuery } from '@apollo/client'
import { TBoard, TQuery } from '@/src/commons/types/generated/types'
import { FETCH_BOARDS_USER_LIKED } from './Like.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'
import { Center } from '@chakra-ui/react'

export default function LikeBoards() {
  const { data, loading, error } = useQuery<Pick<TQuery, 'fetchBoardsUserLiked'>>(
    FETCH_BOARDS_USER_LIKED,
  )

  const boards = data?.fetchBoardsUserLiked ?? []

  const categoryTitle = '💜 좋아요 한 게시물 구경하기'
  const titles = boards.map((board: TBoard) => board.title)
  const writers = boards.map((board: TBoard) => board.writer.nickName)
  const writerImages = boards.map((board: TBoard) => board.writer.picture)
  const images = boards.map(
    (board: TBoard) => board.pictures.find(picture => picture.isMain)?.url ?? '',
  )
  const boardIds = boards.map((board: TBoard) => board.id)
  const userIds = boards.map((board: TBoard) => board.writer.id)

  if (boards.length === 0) {
    return null
  }

  if (loading) {
    return (
      <>
        <Center h="370px">
          <CustomSpinner />
        </Center>
      </>
    )
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  return (
    <>
      <LikeBoardsUI
        categoryTitle={categoryTitle}
        images={images}
        titles={titles}
        writers={writers}
        writerImages={writerImages}
        boardIds={boardIds}
        userIds={userIds}
        isLikedArray={boards.map((board: TBoard) => board.like)}
      />
    </>
  )
}

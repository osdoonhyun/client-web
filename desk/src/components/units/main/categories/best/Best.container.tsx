import BestUI from './Best.presenter'
import { useQuery } from '@apollo/client'
import { TBoard, TQuery } from '@/src/commons/types/generated/types'
import { FETCH_TOP10 } from './Best.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'
import { useAuth } from '@/src/commons/hooks/useAuth'

export default function Best() {
  const { myUserInfo } = useAuth()

  const { data, loading, error } = useQuery<Pick<TQuery, 'fetchTop10'>>(FETCH_TOP10, {
    variables: { userid: myUserInfo?.id || '' },
  })

  if (loading) {
    return <CustomSpinner />
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const bestBoards =
    data?.fetchTop10?.map((board: TBoard) => ({
      ...board,
      isLiked: board.like,
    })) ?? []

  const categoryTitle = '🏆 인기 게시물 TOP 10 🏆'
  const titles = bestBoards.map((board: TBoard) => board.title)
  const writers = bestBoards.map((board: TBoard) => board.writer.nickName)
  const writerImages = bestBoards.map((board: TBoard) => board.writer.picture)
  const images = bestBoards.map(
    (board: TBoard) => board.pictures.find(picture => picture.isMain)?.url ?? '',
  )
  const boardIds = bestBoards.map((board: TBoard) => board.id)
  const userIds = bestBoards.map((board: TBoard) => board.writer.id)

  return (
    <>
      <BestUI
        categoryTitle={categoryTitle}
        images={images}
        titles={titles}
        writers={writers}
        writerImages={writerImages}
        boardIds={boardIds}
        userIds={userIds}
        isLikedArray={bestBoards.map((board: TBoard) => board.like)}
      />
    </>
  )
}

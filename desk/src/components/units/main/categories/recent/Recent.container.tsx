import RecentUI from './Recent.presenter'
import { useQuery } from '@apollo/client'
import { TBoard, TQuery } from '@/src/commons/types/generated/types'
import { FETCH_BOARDS } from './Recent.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'

export default function Recent() {
  const { data, loading, error } = useQuery<Pick<TQuery, 'fetchBoards'>>(FETCH_BOARDS)

  if (loading) {
    return <CustomSpinner />
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const boards = data?.fetchBoards ?? []

  const categoryTitle = '⏱️ 최근 게시물'
  const titles = boards.map((board: TBoard) => board.title)
  const writers = boards.map((board: TBoard) => board.writer.nickName)
  const images = boards.map(
    (board: TBoard) => board.pictures.find(picture => picture.isMain)?.url ?? '',
  )

  return (
    <>
      <RecentUI
        categoryTitle={categoryTitle}
        images={images}
        titles={titles}
        writers={writers}
      />
    </>
  )
}

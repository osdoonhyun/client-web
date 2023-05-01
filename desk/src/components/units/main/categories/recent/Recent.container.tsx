import RecentUI from './Recent.presenter'
import { useQuery } from '@apollo/client'
import { TPicture, TQuery } from '@/src/commons/types/generated/types'
import { FETCH_BOARDS } from './Recent.queries'
import CustomSpinner from '@/src/components/ui/spinner'
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

  // const images = boards.map(
  //   board => board.pictures.find((picture: TPicture) => picture.isMain)?.url ?? '',
  // )

  return (
    <>
      <RecentUI boards={boards} />
    </>
  )
}

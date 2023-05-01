import { useQuery } from '@apollo/client'
import { TQuery } from '@/src/commons/types/generated/types'
import { FETCH_BOARDS } from './RecentMore.queries'
import RecentMoreUI from './RecentMore.presenter'
import CustomSpinner from '@/src/components/ui/spinner'
import ErrorMessage from '@/src/components/ui/errorMessage'

export default function RecentMore() {
  const { data, loading, error } = useQuery<Pick<TQuery, 'fetchBoards'>>(FETCH_BOARDS)

  if (loading) {
    return <CustomSpinner />
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const boards = data?.fetchBoards ?? []

  const handleOnLoadMore = () => {
    console.log('더보기')
  }

  return (
    <>
      <RecentMoreUI onLoadMore={handleOnLoadMore} boards={boards} />
    </>
  )
}

import BestUI from './Best.presenter'
import { useQuery } from '@apollo/client'
import { TQuery } from '@/src/commons/types/generated/types'
import { FETCH_BEST_BOARDS } from './Best.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'

export default function Best() {
  const { data, loading, error } =
    useQuery<Pick<TQuery, 'fetchBestBoards'>>(FETCH_BEST_BOARDS)

  if (loading) {
    return <CustomSpinner />
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const bestBoards = data?.fetchBestBoards ?? []

  return (
    <>
      <BestUI bestBoards={bestBoards} />
    </>
  )
}

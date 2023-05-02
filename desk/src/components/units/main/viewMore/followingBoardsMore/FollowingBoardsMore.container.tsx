import FollowingBoardsMoreUI from './FollowingBoardsMore.presenter'
import { useQuery } from '@apollo/client'
import { TQuery } from '@/src/commons/types/generated/types'
import { ExtendedBoard } from './FollowingBoardsMore.types'
import { FETCH_FOLLOWING_BOARDS } from './followingBoardsMore.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'

export default function FollowingBoardsMore() {
  const { data, loading, error } =
    useQuery<Pick<TQuery, 'fetchFollowingBoards'>>(FETCH_FOLLOWING_BOARDS)

  if (loading) {
    return <CustomSpinner />
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const boards =
    data?.fetchFollowingBoards
      .flatMap(following =>
        following.users.flatMap(user =>
          user.boards?.map(board => ({ ...board, user: user })),
        ),
      )
      ?.filter((board): board is ExtendedBoard => !!board) ?? []

  const handleOnLoadMore = () => {
    console.log('더보기')
  }

  return (
    <>
      <FollowingBoardsMoreUI onLoadMore={handleOnLoadMore} boards={boards} />
    </>
  )
}

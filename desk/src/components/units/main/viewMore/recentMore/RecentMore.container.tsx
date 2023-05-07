import RecentMoreUI from './RecentMore.presenter'
import { useQuery } from '@apollo/client'
import { TBoard, TQuery } from '@/src/commons/types/generated/types'
import { FETCH_BOARDS } from './RecentMore.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'
import { useRouter } from 'next/router'
import { useAuth } from '@/src/commons/hooks/useAuth'

export default function RecentMore() {
  const { myUserInfo } = useAuth()

  const { data, loading, error } = useQuery<Pick<TQuery, 'fetchBoards'>>(FETCH_BOARDS, {
    variables: { userid: myUserInfo?.id || '' },
  })
  const router = useRouter()

  if (loading) {
    return <CustomSpinner />
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const boards =
    data?.fetchBoards?.map((board: TBoard) => ({
      ...board,
      isLiked: board.like,
    })) ?? []

  const handleOnLoadMore = () => {
    console.log('더보기')
  }

  const onClickBoardDetail = (boardId: string) => {
    router.push(`/boards/${boardId}`)
  }

  const onClickUserDetail = (userId: string) => {
    router.push(`/${userId}`)
  }

  return (
    <>
      <RecentMoreUI
        onLoadMore={handleOnLoadMore}
        boards={boards}
        onClickBoardDetail={onClickBoardDetail}
        onClickUserDetail={onClickUserDetail}
        isLikedArray={boards.map((board: TBoard) => board.like)}
      />
    </>
  )
}

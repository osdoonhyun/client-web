import FollowingBoardsUI from './followingBoards.presenter'
import { useQuery } from '@apollo/client'
import { TBoard, TQuery } from '@/src/commons/types/generated/types'
import { FETCH_FOLLOWING_BOARDS } from './followingBoards.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'
// import _ from 'lodash'
import { uniqWith, isEqual } from 'lodash'

export default function FollowingBoards() {
  const { data, loading, error } =
    useQuery<Pick<TQuery, 'fetchFollowingBoards'>>(FETCH_FOLLOWING_BOARDS)

  if (loading) {
    return <CustomSpinner />
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const categoryTitle = '🧐 팔로우 한 유저들의 책상 구경하기'

  const users = data?.fetchFollowingBoards.flatMap(following => following.users) ?? []

  const boardData = users.reduce((acc, user) => {
    if (user.boards) {
      const userBoards = user.boards
        .filter((board): board is TBoard => board !== null && board !== undefined)
        .map(board => ({
          title: board.title,
          writer: user.nickName,
          imageUrl: board.pictures.find(picture => picture.isMain)?.url ?? '',
        }))
      return [...acc, ...userBoards]
    }
    return acc
  }, [] as { title: string; writer: string; imageUrl: string }[])

  const uniqueBoardData = uniqWith(boardData, isEqual)

  const uniqueTitles = uniqueBoardData.map(data => data.title)
  const uniqueWriters = uniqueBoardData.map(data => data.writer)
  const uniqueImages = uniqueBoardData.map(data => data.imageUrl)

  return (
    <>
      <FollowingBoardsUI
        categoryTitle={categoryTitle}
        images={uniqueImages}
        titles={uniqueTitles}
        writers={uniqueWriters}
      />
    </>
  )
}

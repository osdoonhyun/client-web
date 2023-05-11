import FollowingBoardsUI from './followingBoards.presenter'
import { useQuery } from '@apollo/client'
import { TBoard, TQuery } from '@/src/commons/types/generated/types'
import { FETCH_FOLLOWING_BOARDS } from './followingBoards.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'
import { uniqWith, isEqual } from 'lodash'
import { Center } from '@chakra-ui/react'

export default function FollowingBoards() {
  const { data, loading, error } =
    useQuery<Pick<TQuery, 'fetchFollowingBoards'>>(FETCH_FOLLOWING_BOARDS)

  const categoryTitle = '🧐 팔로우 한 유저들의 책상 구경하기'

  const users = data?.fetchFollowingBoards ?? []
  const boardData = users.reduce((acc, user) => {
    if (user.boards) {
      const userBoards = user.boards
        .filter((board): board is TBoard => board !== null && board !== undefined)
        .map(board => ({
          title: board.title,
          writer: user.nickName,
          imageUrl: board.pictures.find(picture => picture.isMain)?.url ?? '',
          writerImage: user.picture,
          userId: user.id,
          boardId: board.id,
          isLiked: board.like,
        }))
      return [...acc, ...userBoards]
    }
    return acc
  }, [] as { title: string; writer: string; imageUrl: string; writerImage: string | null | undefined; userId: string; boardId: string; isLiked: boolean }[])

  const uniqueBoardData = uniqWith(boardData, isEqual)

  const uniqueTitles = uniqueBoardData.map(data => data.title)
  const uniqueWriters = uniqueBoardData.map(data => data.writer)
  const uniqueImages = uniqueBoardData.map(data => data.imageUrl)
  const uniqueWriterImages = uniqueBoardData.map(data => data.writerImage)
  const uniqueBoardIds = uniqueBoardData.map(data => data.boardId)
  const uniqueUserIds = uniqueBoardData.map(data => data.userId)
  const uniqueIsLikedArray = uniqueBoardData.map(data => data.isLiked)

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
      {uniqueBoardData.length > 0 && (
        <FollowingBoardsUI
          categoryTitle={categoryTitle}
          images={uniqueImages}
          titles={uniqueTitles}
          writers={uniqueWriters}
          writerImages={uniqueWriterImages}
          boardIds={uniqueBoardIds}
          userIds={uniqueUserIds}
          isLikedArray={uniqueIsLikedArray}
        />
      )}
    </>
  )
}

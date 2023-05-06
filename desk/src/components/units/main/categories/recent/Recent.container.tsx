import RecentUI from './Recent.presenter'
import { useApolloClient, useQuery } from '@apollo/client'
import { TBoard, TQuery } from '@/src/commons/types/generated/types'
import { FETCH_BOARDS, FETCH_LOGIN_USER } from './Recent.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'
import { useEffect, useState } from 'react'

export default function Recent() {
  const client = useApolloClient()
  const [userid, setUserid] = useState('')

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const { data } = await client.query({ query: FETCH_LOGIN_USER })
        setUserid(data.fetchLoginUser.id)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCurrentUser()
  }, [client])

  const { data, loading, error } = useQuery<Pick<TQuery, 'fetchBoards'>>(FETCH_BOARDS, {
    variables: { userid: userid || '' },
  })

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

  const categoryTitle = '⏱️ 최근 게시물'
  const titles = boards.map((board: TBoard) => board.title)
  const writers = boards.map((board: TBoard) => board.writer.nickName)
  const writerImages = boards.map((board: TBoard) => board.writer.picture)
  const images = boards.map(
    (board: TBoard) => board.pictures.find(picture => picture.isMain)?.url ?? '',
  )
  const boardIds = boards.map((board: TBoard) => board.id)
  const userIds = boards.map((board: TBoard) => board.writer.id)

  return (
    <>
      <RecentUI
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

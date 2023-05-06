import RecentMoreUI from './RecentMore.presenter'
import { useApolloClient, useQuery } from '@apollo/client'
import { TBoard, TQuery } from '@/src/commons/types/generated/types'
import { FETCH_BOARDS, FETCH_LOGIN_USER } from './RecentMore.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function RecentMore() {
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

  const { data, loading, error, fetchMore } = useQuery<Pick<TQuery, 'fetchBoards'>>(
    FETCH_BOARDS,
    {
      variables: { userid: userid || '' },
    },
  )
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

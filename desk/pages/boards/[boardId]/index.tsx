import { TQuery } from '@/src/commons/types/generated/types'
import BoardDetail from '@/src/components/units/boards/detail/Detail.container'
import { FETCH_BOARD } from '@/src/components/units/boards/detail/Detail.queries'
import { GraphQLClient } from 'graphql-request'
import { GetServerSideProps } from 'next'

type BoardDetailPageProps = {
  boardData: Pick<TQuery, 'fetchBoard'>
}

export const getServerSideProps: GetServerSideProps<BoardDetailPageProps> = async ({
  query,
}) => {
  const { boardId } = query
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_APOLLO_URI ?? '', {
    credentials: 'include',
  })

  const result = await graphQLClient.request<Pick<TQuery, 'fetchBoard'>>(FETCH_BOARD, {
    boardid: boardId as string,
  })

  return {
    props: {
      boardData: result,
    },
  }
}

export default function BoardDetailPage(props: BoardDetailPageProps) {
  const boardData = props.boardData.fetchBoard

  return <BoardDetail boardData={boardData} />
}

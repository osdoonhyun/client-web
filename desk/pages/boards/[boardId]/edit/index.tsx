import { TQuery, TQueryFetchBoardArgs } from '@/src/commons/types/generated/types'
import CustomSpinner from '@/src/components/ui/customSpinner'
import BoardsRegister from '@/src/components/units/boards/register/Register.container'
import { FETCH_BOARD } from '@/src/components/units/boards/register/Register.queries'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

export default function BoardsEditPage() {
  const router = useRouter()

  const { data: boardData, loading } = useQuery<
    Pick<TQuery, 'fetchBoard'>,
    TQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: { boardid: router.query.boardId as string, userid: '' },
  })

  if (loading) {
    return <CustomSpinner />
  }

  return <BoardsRegister isEdit={true} boardData={boardData} />
}

import { TQuery } from '@/src/commons/types/generated/types'

export type SearchBoardsUIProps = {
  onClickSearchBoard: (searchValue: string | undefined) => void
  onClickBoardDetail: (boardId: string) => void
  loading: boolean
  data: Pick<TQuery, 'searchBoards'> | undefined
}

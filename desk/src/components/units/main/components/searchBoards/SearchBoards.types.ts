import { TQuery } from '@/src/commons/types/generated/types'
import { RefObject } from 'react'

export type SearchBoardsUIProps = {
  onClickSearchBoard: (searchValue: string | undefined) => void
  onClickBoardDetail: (boardId: string) => void
  loading: boolean
  data: Pick<TQuery, 'searchBoards'> | undefined
  searchInputRef: RefObject<HTMLInputElement>
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

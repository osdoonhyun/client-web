import { TQuery } from '@/src/commons/types/generated/types'
import { RefObject } from 'react'

export type SearchBoardsUIProps = {
  loading: boolean
  data: Pick<TQuery, 'searchBoards'> | undefined
  onClickSearchBoard: (searchValue: string | undefined) => void
  onClickBoardDetail: (boardId: string) => void
  highlightSearchKeyword: (text: string, keyword: string) => (string | JSX.Element)[]
  searchInputRef: RefObject<HTMLInputElement>
  searchKeyword?: string
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

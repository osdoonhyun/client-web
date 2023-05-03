import { TQuery } from '@/src/commons/types/generated/types'
import { KeyboardEvent, RefObject } from 'react'

export type SearchBoardsUIProps = {
  loading: boolean
  data: Pick<TQuery, 'searchBoards'> | undefined
  onClickSearchBoard: (searchValue: string | undefined) => void
  onClickBoardDetail: (boardId: string) => void
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void
  highlightSearchKeyword: (text: string, keyword: string) => (string | JSX.Element)[]
  searchInputRef: RefObject<HTMLInputElement>
  searchKeyword?: string
  isSearchOpen: boolean
  onSearchOpen: () => void
  onSearchClose: () => void
  isResultOpen: boolean
  onResultOpen: () => void
  onResultClose: () => void
}

import SearchBoardsUI from './SearchBoards.presenter'
import { TQuery } from '@/src/commons/types/generated/types'
import { useLazyQuery } from '@apollo/client'
import { KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { SEARCH_BOARDS } from './SearchBoards.queries'
import { Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'

const highlightSearchKeyword = (
  text: string,
  keyword: string,
): (string | JSX.Element)[] => {
  const regex = new RegExp(`(${keyword})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, index) => {
    if (part.match(regex)) {
      return (
        <Text as="span" key={index} color="dPrimary">
          {part}
        </Text>
      )
    }
    return <span key={index}>{part}</span>
  })
}

export default function SearchBoards() {
  const {
    isOpen: isSearchOpen,
    onOpen: onSearchOpen,
    onClose: onSearchClose,
  } = useDisclosure()
  const {
    isOpen: isResultOpen,
    onOpen: onResultOpen,
    onClose: onResultClose,
  } = useDisclosure()

  const [isMobile] = useMediaQuery('(max-width: 480px)')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const [searchBoards, { data, error, loading }] =
    useLazyQuery<Pick<TQuery, 'searchBoards'>>(SEARCH_BOARDS)

  const [searchKeyword, setSearchKeyword] = useState('')
  const [boards, setBoards] = useState<Pick<TQuery, 'searchBoards'> | undefined>(
    undefined,
  )

  const onClickSearchBoard = (searchValue: string | undefined) => {
    if (searchValue) {
      setSearchKeyword(searchValue)
      searchBoards({ variables: { keyword: searchValue } })
      onSearchClose()
      onResultOpen()
    }
  }

  const onClickBoardDetail = (boardId: string) => {
    onResultClose()
    router.push(`/boards/${boardId}`)
  }

  useEffect(() => {
    if (data) {
      setBoards(data)
      onResultOpen()
      onSearchClose()
    }
  }, [data, onResultOpen, onSearchClose])

  if (loading) {
    return <CustomSpinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const searchInput = searchInputRef.current
      if (searchInput) {
        const searchValue = searchInput.value
        if (searchValue) {
          setSearchKeyword(searchValue)
          searchBoards({ variables: { keyword: searchValue } })
          if (isMobile) {
            onSearchOpen()
          } else {
            onResultOpen()
          }
          searchInput.value = ''
        }
      }
    }
  }

  return (
    <>
      <SearchBoardsUI
        onClickSearchBoard={onClickSearchBoard}
        onClickBoardDetail={onClickBoardDetail}
        loading={loading}
        data={boards}
        searchInputRef={searchInputRef}
        isSearchOpen={isSearchOpen}
        onSearchOpen={onSearchOpen}
        onSearchClose={onSearchClose}
        isResultOpen={isResultOpen}
        onResultOpen={onResultOpen}
        onResultClose={onResultClose}
        highlightSearchKeyword={highlightSearchKeyword}
        searchKeyword={searchKeyword}
        onKeyDown={onKeyDown}
      />
    </>
  )
}

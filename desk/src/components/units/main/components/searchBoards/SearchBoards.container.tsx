import SearchBoardsUI from './SearchBoards.presenter'
import { TQuery } from '@/src/commons/types/generated/types'
import { useLazyQuery } from '@apollo/client'
import { KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { SEARCH_BOARDS } from './SearchBoards.queries'
import { Text, useDisclosure } from '@chakra-ui/react'
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
  const { isOpen, onOpen, onClose } = useDisclosure()
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
      onOpen()
    }
  }

  const onClickBoardDetail = (boardId: string) => {
    onClose()
    router.push(`/boards/${boardId}`)
  }

  useEffect(() => {
    if (data) {
      setBoards(data)
    }
  }, [data])

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
        setTimeout(() => {
          const searchValue = searchInput.value
          if (searchValue) {
            setSearchKeyword(searchValue)
            searchBoards({ variables: { keyword: searchValue } })
            onOpen()
            searchInput.value = ''
          }
        }, 0)
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
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        highlightSearchKeyword={highlightSearchKeyword}
        searchKeyword={searchKeyword}
        onKeyDown={onKeyDown}
      />
    </>
  )
}

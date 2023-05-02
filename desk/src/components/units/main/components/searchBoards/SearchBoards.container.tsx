import SearchBoardsUI from './SearchBoards.presenter'
import { TQuery } from '@/src/commons/types/generated/types'
import { useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import { SEARCH_BOARDS } from './SearchBoards.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'
import { useRouter } from 'next/router'
import { useDisclosure } from '@chakra-ui/react'

export default function SearchBoards() {
  const [keyword, setKeyword] = useState('')
  const { onClose } = useDisclosure()
  const router = useRouter()

  const [searchBoards, { data, error, loading }] =
    useLazyQuery<Pick<TQuery, 'searchBoards'>>(SEARCH_BOARDS)

  if (loading) {
    return <CustomSpinner />
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const onClickSearchBoard = (searchValue: string | undefined) => {
    if (searchValue) {
      setKeyword(searchValue)
      searchBoards({ variables: { keyword: searchValue } })
    }
  }

  const onClickBoardDetail = (boardId: string) => {
    onClose()
    router.push(`/boards/${boardId}`)
  }

  return (
    <>
      <SearchBoardsUI
        onClickSearchBoard={onClickSearchBoard}
        onClickBoardDetail={onClickBoardDetail}
        loading={loading}
        data={data}
      />
    </>
  )
}

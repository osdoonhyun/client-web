import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { SearchBoardsUIProps } from './SearchBoards.types'

export default function SearchBoardsUI(props: SearchBoardsUIProps) {
  return (
    <>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="dGray.medium" />
          </InputLeftElement>
          <Input placeholder="search" focusBorderColor="dPrimary" />
          <Button
            ml="10px"
            borderColor="dGray.medium"
            color="dGray.medium"
            variant="outline"
            _hover={{ color: 'dPrimary', borderColor: 'dPrimary' }}>
            검색
          </Button>
        </InputGroup>
      </Stack>
    </>
  )
}

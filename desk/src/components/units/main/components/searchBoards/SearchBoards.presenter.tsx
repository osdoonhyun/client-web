import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { SearchBoardsUIProps } from './SearchBoards.types'

export default function SearchBoardsUI(props: SearchBoardsUIProps) {
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="dGray.medium" />
          </InputLeftElement>
          <Input ref={searchInputRef} placeholder="search" focusBorderColor="dPrimary" />
          <Button
            ml="10px"
            borderColor="dGray.medium"
            color="dGray.medium"
            variant="outline"
            _hover={{ color: 'dPrimary', borderColor: 'dPrimary' }}
            onClick={() => props.onClickSearchBoard(searchInputRef.current?.value)}>
            검색
          </Button>
        </InputGroup>
      </Stack>
      {props.data?.searchBoards && (
        <Box mt={4}>
          {props.data.searchBoards.map(board => (
            <Box key={board.id} borderWidth="1px" borderRadius="lg" p={4} mt={2}>
              <Heading size="md" mb={2}>
                {board.title}
              </Heading>
              <Text>{board.description}</Text>
            </Box>
          ))}
        </Box>
      )}
    </>
  )
}

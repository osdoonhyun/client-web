import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { SearchBoardsUIProps } from './SearchBoards.types'

export default function SearchBoardsUI(props: SearchBoardsUIProps) {
  const [showInput, setShowInput] = useState(false)

  const onClickSearchButton = () => {
    const searchInput = props.searchInputRef.current
    if (searchInput) {
      const searchValue = searchInput.value
      if (searchValue) {
        props.onClickSearchBoard(searchValue)
        props.onOpen()
        searchInput.value = ''
      }
    }
  }

  const onClickBoard = (boardId: string) => {
    props.onClickBoardDetail(boardId)
    props.onClose()
  }

  return (
    <>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="auto" onClick={() => setShowInput(!showInput)}>
            <SearchIcon color="dGray.medium" />
          </InputLeftElement>
          <Input
            ref={props.searchInputRef}
            placeholder="search"
            focusBorderColor="dPrimary"
            onKeyDown={props.onKeyDown}
            display={showInput ? 'block' : 'none'}
          />
          <Button
            ml="10px"
            borderColor="dGray.medium"
            color="dGray.medium"
            variant="outline"
            _hover={{ color: 'dPrimary', borderColor: 'dPrimary' }}
            onClick={onClickSearchButton}>
            검색
          </Button>
        </InputGroup>
      </Stack>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="xl">
        <ModalOverlay />
        <ModalContent
          h={
            props.data?.searchBoards && props.data.searchBoards.length > 0
              ? '700px'
              : undefined
          }
          p="10px">
          <ModalHeader>검색 결과</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY="auto">
            {props.data?.searchBoards && props.data.searchBoards.length > 0 ? (
              props.data.searchBoards.map(board => (
                <Box
                  key={board.id}
                  borderWidth="1px"
                  borderRadius="lg"
                  p={4}
                  mt={2}
                  _hover={{ cursor: 'pointer', bg: '#666bff28' }}
                  onClick={() => onClickBoard(board.id)}>
                  <Heading size="md" mb={2}>
                    {props.highlightSearchKeyword(board.title, props.searchKeyword ?? '')}
                  </Heading>
                  {props
                    .highlightSearchKeyword(board.description, props.searchKeyword ?? '')
                    .map((highlightedText, index) => (
                      <Text key={index} display="inline">
                        {highlightedText}
                      </Text>
                    ))}
                </Box>
              ))
            ) : (
              <Text>검색 결과가 없습니다.</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              _hover={{ bg: 'dPrimaryHover.transparency', color: 'white' }}
              onClick={props.onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

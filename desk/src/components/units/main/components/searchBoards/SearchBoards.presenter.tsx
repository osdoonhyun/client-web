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
  useDisclosure,
} from '@chakra-ui/react'
import { useRef, useEffect } from 'react'
import { SearchBoardsUIProps } from './SearchBoards.types'

export default function SearchBoardsUI(props: SearchBoardsUIProps) {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

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
            onClick={() => {
              props.onClickSearchBoard(searchInputRef.current?.value)
              onOpen()
            }}>
            검색
          </Button>
        </InputGroup>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>검색 결과</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.data?.searchBoards ? (
              props.data.searchBoards.map(board => (
                <Box
                  key={board.id}
                  borderWidth="1px"
                  borderRadius="lg"
                  p={4}
                  mt={2}
                  _hover={{ cursor: 'pointer', bg: 'gray.100' }}
                  onClick={() => {
                    props.onClickBoardDetail(board.id)
                    onClose()
                  }}>
                  <Heading size="md" mb={2}>
                    {board.title}
                  </Heading>
                  <Text>{board.description}</Text>
                </Box>
              ))
            ) : (
              <Text>검색 결과가 없습니다.</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              _hover={{ bg: 'dPrimaryHover.transparency', color: 'white' }}
              onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

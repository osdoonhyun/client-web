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
  useMediaQuery,
} from '@chakra-ui/react'
import { SearchBoardsUIProps } from './SearchBoards.types'

export default function SearchBoardsUI(props: SearchBoardsUIProps) {
  const [isMobile] = useMediaQuery('(max-width: 480px)')

  const onClickSearchButton = async () => {
    const searchInput = props.searchInputRef.current
    if (searchInput) {
      const searchValue = searchInput.value
      if (searchValue) {
        await props.onClickSearchBoard(searchValue)
        searchInput.value = ''
        if (!isMobile) {
          props.onOpen()
        }
      }
    }
  }

  const onClickBoard = (boardId: string) => {
    props.onClickBoardDetail(boardId)
    props.onClose()
  }

  const handleSearchModalOpen = async () => {
    if (isMobile) {
      props.onOpen()
    } else {
      await onClickSearchButton()
    }
  }

  return (
    <>
      <Stack spacing={4}>
        {!isMobile && (
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="dGray.medium" />
            </InputLeftElement>
            <Input
              ref={props.searchInputRef}
              placeholder="search"
              focusBorderColor="dPrimary"
              onKeyDown={props.onKeyDown}
            />
            <Button
              ml="10px"
              borderColor="dGray.medium"
              color="dGray.medium"
              variant="outline"
              _hover={{ color: 'dPrimary', borderColor: 'dPrimary' }}
              onClick={handleSearchModalOpen}>
              검색
            </Button>
          </InputGroup>
        )}
        {isMobile && (
          <Button
            borderColor="dGray.medium"
            color="dGray.medium"
            variant="outline"
            _hover={{ color: 'dPrimary', borderColor: 'dPrimary' }}
            onClick={handleSearchModalOpen}>
            <SearchIcon />
          </Button>
        )}
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
      {isMobile && (
        <Modal isOpen={props.isOpen} onClose={props.onClose} size="xl">
          <ModalOverlay />
          <ModalContent p="10px">
            <ModalHeader>검색</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="dGray.medium" />
                </InputLeftElement>
                <Input
                  ref={props.searchInputRef}
                  placeholder="search"
                  focusBorderColor="dPrimary"
                  onKeyDown={props.onKeyDown}
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
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

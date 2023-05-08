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

  const onClickSearchButton = () => {
    const searchInput = props.searchInputRef.current
    if (searchInput) {
      const searchValue = searchInput.value
      if (searchValue) {
        props.onClickSearchBoard(searchValue)
        if (isMobile) {
          props.onSearchOpen()
        } else {
          props.onResultOpen()
        }
      }
    }
  }

  const onClickSearchModalOpen = () => {
    if (isMobile) {
      props.onSearchOpen()
      setTimeout(() => {
        if (props.searchInputRef.current) {
          props.searchInputRef.current.focus()
        }
      }, 0)
    } else {
      onClickSearchButton()
    }
  }

  const onClickBoard = (boardId: string) => {
    props.onClickBoardDetail(boardId)
    props.onResultClose()
  }

  return (
    <>
      <Stack spacing={4} ml="20px">
        {!isMobile && (
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="dGray.medium" />
            </InputLeftElement>
            <Input
              ref={props.searchInputRef}
              placeholder="검색어를 입력하세요."
              focusBorderColor="dPrimary"
              onKeyDown={props.onKeyDown}
            />
            <Button
              ml="10px"
              borderColor="dGray.medium"
              color="dGray.medium"
              variant="outline"
              _hover={{ color: 'dPrimary', borderColor: 'dPrimary' }}
              onClick={onClickSearchModalOpen}>
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
            onClick={onClickSearchModalOpen}>
            <SearchIcon />
          </Button>
        )}
      </Stack>
      <Modal isOpen={props.isResultOpen} onClose={props.onResultClose} size="xl">
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
              onClick={props.onResultClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {isMobile && (
        <Modal isOpen={props.isSearchOpen} onClose={props.onSearchClose} size="xl">
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
                  placeholder="검색어를 입력하세요."
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

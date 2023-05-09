import ErrorMessage from '@/src/components/ui/errorMessage'
import { EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { ChangeEvent, KeyboardEvent, MouseEvent, useEffect, useState } from 'react'
import { TitleWithInputTagsProps } from './types'

export default function TitleWithInputTags(props: TitleWithInputTagsProps) {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [tagText, setTagText] = useState<string>('')
  const [tagTexts, setTagTexts] = useState<string[]>(
    props.tags?.map(tag => tag.hashtag) ?? [],
  )

  useEffect(() => {
    props.onChangeInputTags(tagTexts)
  }, [tagTexts])

  const onChangeTagInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTagText(event.target.value)
  }

  const onClickInputTag = () => {
    if (tagText === '' || tagTexts.includes(tagText)) {
      return
    }

    setTagTexts(tags => [...tags, tagText])
    setTagText('')
    onClose()
  }

  const onKeyupEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onClickInputTag()
    }
  }

  const onClickRemoveTag = (value: string) => () => {
    setTagTexts(tags => tags.filter(tag => tag !== value))
  }

  return (
    <Box>
      <Text
        fontSize={16}
        fontWeight={700}
        color={useColorModeValue('dGray.dark', 'dGray.light')}
        mb="8px">
        {props.title}
        {props.isRequired && (
          <span style={{ color: '#666CFF', fontSize: '14px' }}>{' *'}</span>
        )}
      </Text>
      <HStack spacing={3} wrap={'wrap'}>
        {tagTexts.map((tag, index) => (
          <Tag
            size={{ base: 'md', md: 'lg' }}
            key={index}
            borderRadius="full"
            variant="solid"
            bg="dPrimaryHover.darker">
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton onClick={onClickRemoveTag(tag)} />
          </Tag>
        ))}
        <Popover
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          placement="end-start"
          closeOnBlur={false}>
          <PopoverTrigger>
            <IconButton
              aria-label="Add to tag"
              size={'md'}
              icon={<EditIcon />}
              bgColor={useColorModeValue('dGray.light', '#bababa1e')}
            />
          </PopoverTrigger>
          <PopoverContent p={5} bgColor={useColorModeValue('dGray.light', 'gray.700')}>
            <PopoverArrow bgColor={useColorModeValue('dGray.light', 'gray.700')} />
            <Stack spacing={4}>
              <Input
                bgColor={useColorModeValue('white', 'gray.600')}
                color={'dBlack'}
                value={tagText}
                placeholder="ex) 개발자 데스크, 학생 데스크..."
                _placeholder={{ color: 'dGray.medium' }}
                focusBorderColor="dPrimary"
                onKeyUp={onKeyupEnter}
                onChange={onChangeTagInput}
              />
              <ButtonGroup display="flex" justifyContent="flex-end">
                <Button
                  variant="outline"
                  borderColor={'gray.400'}
                  color={useColorModeValue('dGray.dark', 'gray.100')}
                  onClick={onClose}>
                  닫기
                </Button>
                <Button
                  bgColor={useColorModeValue('gray.400', 'gray.500')}
                  color={useColorModeValue('dGray.light', 'gray.100')}
                  _hover={{ bg: 'gray.500' }}
                  onClick={onClickInputTag}>
                  입력
                </Button>
              </ButtonGroup>
            </Stack>
          </PopoverContent>
        </Popover>
      </HStack>
      <ErrorMessage message={props.errorMessage} />
    </Box>
  )
}

import ErrorMessage from '@/src/components/ui/errorMessage'
import { EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  IconButton,
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
import { Input } from 'antd'
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
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

  const onClickInput = (event: MouseEvent<HTMLButtonElement>) => {
    if (tagText === '' || tagTexts.includes(tagText)) {
      return
    }

    setTagTexts(tags => [...tags, tagText])
    setTagText('')
    onClose()
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
      <HStack spacing={4}>
        {tagTexts.map((tag, index) => (
          <Tag
            size={'lg'}
            key={index}
            borderRadius="full"
            variant="solid"
            colorScheme="green">
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
              size={'sm'}
              icon={<EditIcon />}
              bgColor={useColorModeValue('dGray.light', '#bababa1e')}
            />
          </PopoverTrigger>
          <PopoverContent p={5} bgColor={useColorModeValue('dGray.light', '#bababa1e')}>
            <PopoverArrow />
            <Stack spacing={4}>
              <Input
                value={tagText}
                placeholder="해시태그를 입력해주세요."
                onChange={onChangeTagInput}
              />
              <ButtonGroup display="flex" justifyContent="flex-end">
                <Button variant="outline" onClick={onClose}>
                  닫기
                </Button>
                <Button onClick={onClickInput}>입력</Button>
              </ButtonGroup>
            </Stack>
          </PopoverContent>
        </Popover>
      </HStack>
      <ErrorMessage message={props.errorMessage} />
    </Box>
  )
}

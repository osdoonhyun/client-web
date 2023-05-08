import { maxWidth } from '@/src/commons/libraries/layout'
import { Box, Button, Center, Flex } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'
import ImageUpload from '../components/imageUpload'
import ItemLinkInput from '../components/itemLinkInput'
import TitleWithInput from '../components/titleWithInput'
import TitleWithInputTags from '../components/titleWithInputTags'
import { BoardsRegisterUIProps } from './Register.types'
import { KeyboardEvent } from 'react'

const MIN_ITEMS_COUNT = 2

export default function BoardsRegisterUI(props: BoardsRegisterUIProps) {
  const boardData = props.boardData?.fetchBoard

  const onKeyDownSubmit = (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  return (
    <Flex
      maxW={maxWidth.lg}
      direction={'column'}
      justify={'flex-start'}
      align={'stretch'}
      margin={'0 auto'}
      pl={'10px'}
      pr={'10px'}>
      <Box mt={'60px'}>
        <ImageUpload imageDatas={boardData?.pictures} onChangeFile={props.onChangeFile} />
      </Box>
      <form
        onKeyDown={onKeyDownSubmit}
        onSubmit={props.useForm.handleSubmit(props.onClickSubmit)}>
        <Box mt={'57px'}>
          <Controller
            name="title"
            control={props.useForm.control}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <TitleWithInput
                type="input"
                isRequired={true}
                title="제목을 입력해주세요."
                value={value || boardData?.title}
                maxLength={100}
                onChangeInput={onChange}
                errorMessage={errors.title?.message}
              />
            )}
          />
        </Box>
        <Box mt={'57px'}>
          <Controller
            name="deskIntroduce"
            control={props.useForm.control}
            render={({ field: { onChange, value }, formState: { errors } }) => (
              <TitleWithInput
                type="textarea"
                isRequired={true}
                title="책상을 자랑해주세요."
                value={value || ''}
                maxLength={500}
                inputHeight={300}
                onChangeInput={onChange}
                errorMessage={errors.deskIntroduce?.message}
              />
            )}
          />
        </Box>
        <Box mt={'57px'}>
          <Controller
            name="usingItems"
            control={props.useForm.control}
            render={({ field: { onChange, value }, formState: { errors } }) => {
              return (
                <ItemLinkInput
                  title="어떤 장비를 사용하시나요? (2개 이상)"
                  items={boardData?.products}
                  maxCount={MIN_ITEMS_COUNT}
                  isRequired={true}
                  onItems={onChange}
                  errorMessage={
                    errors.usingItems?.every?.(item => item?.name && item?.url) !==
                    undefined
                      ? '사용하시는 장비를 자랑해주세요.'
                      : ''
                  }
                />
              )
            }}
          />
        </Box>
        <Box mt={'57px'}>
          <Controller
            name="deskRecommendItem"
            control={props.useForm.control}
            render={({ field: { onChange, value } }) => (
              <TitleWithInput
                type="textarea"
                isRequired={false}
                title="추천하고 싶은 아이템이 있나요?"
                value={value || ''}
                maxLength={500}
                inputHeight={300}
                onChangeInput={onChange}
              />
            )}
          />
        </Box>
        <Box mt={'57px'}>
          <Controller
            name="hashTag"
            control={props.useForm.control}
            render={({ field: { onChange, value } }) => (
              <TitleWithInputTags
                type="input"
                isRequired={false}
                tags={boardData?.hashtags ?? []}
                title="해시태그를 입력해주세요."
                value={value || []}
                defaultValue={value || []}
                onChangeInputTags={onChange}
              />
            )}
          />
        </Box>
        <Center mt={'180px'} mb={'50px'}>
          <Button
            type="submit"
            w={'40%'}
            h={'48px'}
            bgColor={'dPrimary'}
            _hover={{ bg: 'dPrimaryHover.dark' }}
            color={'white'}
            isLoading={props.isLoading}
            loadingText={`${props.isEdit ? '수정' : '등록'} 중...`}>
            {props.isEdit ? '수정하기' : '등록하기'}
          </Button>
        </Center>
      </form>
    </Flex>
  )
}

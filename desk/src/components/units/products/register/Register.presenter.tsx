import { Button } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'
import { ProductRegisterUIProps } from './Register.types'
import ImageUpload from '../components/imageUpload'
import TitleWithInput from '../components/input'

export default function ProductRegisterUI(props: ProductRegisterUIProps) {
  return (
    <>
      <ImageUpload onChangeFileUrls={props.onChangeFileUrls} />
      <form onSubmit={props.useForm.handleSubmit(props.onClickSubmit)}>
        <Controller
          name="title"
          control={props.useForm.control}
          render={({ field: { onChange, value } }) => (
            <TitleWithInput
              type="input"
              isRequired={true}
              title="제목을 입력해주세요."
              value={value || ''}
              maxLength={50}
              onChangeInput={onChange}
            />
          )}
        />
        <Controller
          name="deskIntroduce"
          control={props.useForm.control}
          render={({ field: { onChange, value } }) => (
            <TitleWithInput
              type="textarea"
              isRequired={true}
              title="책상을 자랑해주세요."
              value={value || ''}
              maxLength={500}
              inputHeight={300}
              onChangeInput={onChange}
            />
          )}
        />
        <Controller
          name="deskRecommendItem"
          control={props.useForm.control}
          render={({ field: { onChange, value } }) => (
            <TitleWithInput
              type="textarea"
              isRequired={false}
              title="더 추천하고 싶은 아이템이 있나요?"
              value={value || ''}
              maxLength={500}
              inputHeight={300}
              onChangeInput={onChange}
            />
          )}
        />
        <Controller
          name="hashTag"
          control={props.useForm.control}
          render={({ field: { onChange, value } }) => (
            <TitleWithInput
              type="input"
              isRequired={false}
              title="해시태그를 입력해주세요. ex) 학생데스크셋업, 개발자데스크셋업..."
              value={value || ''}
              onChangeInput={onChange}
            />
          )}
        />
        <Button type="submit">등록</Button>
      </form>
    </>
  )
}

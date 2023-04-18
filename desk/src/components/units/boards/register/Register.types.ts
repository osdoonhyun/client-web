import { UseFormReturn } from 'react-hook-form'
import * as yup from 'yup'

export type BoardsRegisterProps = {
  isEdit: boolean
}

export type BoardsRegisterUIProps = {
  isEdit: boolean
  useForm: UseFormReturn<BoardsRegisterInputForm, any>
  onChangeFileUrls: (fileUrl: string, index: number) => void
  onClickSubmit: (data: BoardsRegisterInputForm) => void
}

export type BoardsRegisterInputForm = {
  title: string | undefined
  deskIntroduce: string | undefined
  deskRecommendItem: string | undefined
  hashTag: string | undefined
}

export const boardsRegisterSchema = yup.object({
  title: yup.string().required('제목을 입력해주세요.'),
  deskIntroduce: yup
    .string()
    .max(500, '최대 500자까지 입력 가능합니다.')
    .required('책상을 자랑해주세요.'),
})

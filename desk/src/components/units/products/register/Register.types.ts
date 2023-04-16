import { UseFormReturn } from 'react-hook-form'
import * as yup from 'yup'

export type ProductRegisterProps = {
  isEdit: boolean
}

export type ProductRegisterUIProps = {
  isEdit: boolean
  useForm: UseFormReturn<ProductRegisterInputForm, any>
  onChangeFileUrls: (fileUrl: string, index: number) => void
  onClickSubmit: (data: ProductRegisterInputForm) => void
}

export type ProductRegisterInputForm = {
  title: string | undefined
  deskIntroduce: string | undefined
  deskRecommendItem: string | undefined
  hashTag: string | undefined
}

export const productRegisterSchema = yup.object({
  title: yup.string().required('제목을 입력해주세요.'),
  deskIntroduce: yup
    .string()
    .max(500, '최대 500자까지 입력 가능합니다.')
    .required('책상을 자랑해주세요.'),
})

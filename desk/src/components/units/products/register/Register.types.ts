import { UseFormReturn } from 'react-hook-form'

export type ProductRegisterInputForm = {
  title: string | undefined
  deskIntroduce: string | undefined
  deskRecommendItem: string | undefined
  hashTag: string | undefined
}

export type ProductRegisterUIProps = {
  useForm: UseFormReturn<ProductRegisterInputForm, any>
  onChangeFileUrls: (fileUrl: string, index: number) => void
  onClickSubmit: (data: ProductRegisterInputForm) => void
}

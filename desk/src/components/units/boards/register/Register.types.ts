import { UseFormReturn } from 'react-hook-form'
import * as yup from 'yup'
import { ItemLinkType } from '../components/itemLinkInput/types'
import { TQuery } from '@/src/commons/types/generated/types'

export type BoardsRegisterProps = {
  isEdit: boolean
  boardData?: Pick<TQuery, 'fetchBoard'> | undefined
}

export type BoardsRegisterUIProps = {
  isEdit: boolean
  boardData?: Pick<TQuery, 'fetchBoard'> | undefined
  isLoading: boolean
  useForm: UseFormReturn<BoardsRegisterInputForm, any>
  onChangeFile: (file: File, index: number) => void
  onChangeFileUrl: (fileUrl: string, index: number) => void
  onClickSubmit: (data: BoardsRegisterInputForm) => void
}

export type BoardsRegisterInputForm = {
  title: string | undefined
  deskIntroduce: string | undefined
  usingItems: [ItemLinkType]
  deskRecommendItem: string | undefined
  hashTag: string[] | undefined
}

export const boardsRegisterSchema = yup.object({
  title: yup.string().required('제목을 입력해주세요.'),
  deskIntroduce: yup
    .string()
    .max(500, '최대 500자까지 입력 가능합니다.')
    .required('책상을 자랑해주세요.'),
  usingItems: yup.array().of(
    yup
      .object({
        name: yup.string().required('상품명을 입력해주세요.'),
        link: yup.string().required('링크를 입력해주세요.'),
      })
      .required('사용하시는 장비를 자랑해주세요.'),
  ),
})

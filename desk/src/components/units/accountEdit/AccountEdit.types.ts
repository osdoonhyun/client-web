import { ChangeEvent, MutableRefObject } from 'react'
// import { TMyUserInfo } from '../auth/Auth.types'
import * as yup from 'yup'
import { UseFormReturn, useForm } from 'react-hook-form'
import { TSnsAccount, TUser } from '@/src/commons/types/generated/types'

//sns 계정 추가 타입
export type ItemLinkType = {
  id: string
  link: string
}

export type AccountEditUIProps = {
  myUserInfo: TUser | null
  fileUploadRef: React.RefObject<HTMLInputElement>
  nextId: MutableRefObject<number>
  snsLinks: Array<ItemLinkType> | undefined
  SnsLinkCount: {
    MAX: number
    MIN: number
  }
  EditableControls: React.FC // type: JSX.Element | null
  onChangeFileUrl: (fileUrl: string, index: number) => void
  onChangeFile: (file: File, index: number) => void
  addSnsLink: () => void
  deleteSnsLink: (id: number) => void
  onChangeLink: (event: ChangeEvent<HTMLInputElement>) => void
  onClickUploadButton: (e: React.MouseEvent<HTMLButtonElement>) => void
  onClickSubmit: (data: AccountEditInputForm) => void
  // register: ReturnType<typeof useForm>['register']
  // handleSubmit: ReturnType<typeof useForm>['handleSubmit']
  // useForm: UseFormReturn<AccountEditInputForm, any>
  // useForm: UseFormReturn<AccountEditInputForm, any>
  register: UseFormReturn<AccountEditInputForm, any>['register']
  handleSubmit: UseFormReturn<AccountEditInputForm, any>['handleSubmit']
  myJob: string
  setMyJob: (myJob: string) => void
  // onChangeMyJob: () => () => void
  // onChangeMyJob: (myJob: string) => () => void
}

export type AccountEditInputForm = {
  nickName: string
  intro: string
  picture: string
  // TODO: 이걸로 변경 예정
  snsAccounts: ItemLinkType[]
  // snsAccount: {
  //   id: string
  //   sns: string
  // }
  jobGroup: string
  // snsAccount: string
}

export type UpdateUserInput = {
  picture?: string
  nickName?: string
  intro: string
  jobGroup?: string
  snsAccount: string[]
}

export const AccountEditSchema = yup.object({
  nickName: yup.string().max(20, '닉네임은 최대 20자까지 입력 가능합니다.'),
  intro: yup.string().max(30, '한 줄 소개는 최대 30자까지 입력 가능합니다.'),
})

import * as yup from 'yup'
import { UseFormReturn } from 'react-hook-form'
import { TUser } from '@/src/commons/types/generated/types'
import { ChangeEvent } from 'react'

//sns 계정 추가 타입
export type ItemLinkType = {
  id: string
  sns: string
}

export type AccountEditUIProps = {
  myUserInfo: TUser | null
  fileUploadRef: React.RefObject<HTMLInputElement>
  EditableControls: React.FC // type: JSX.Element | null
  onChangeFileUrl: (fileUrl: string, index: number) => void
  onChangeFile: (file: File, index: number) => void
  onClickUploadButton: (e: React.MouseEvent<HTMLButtonElement>) => void
  onClickSubmit: (data: AccountEditInputForm) => void
  register: UseFormReturn<AccountEditInputForm, any>['register']
  handleSubmit: UseFormReturn<AccountEditInputForm, any>['handleSubmit']
  myJob: string
  setMyJob: (myJob: string) => void
  isEdited: boolean
  onChangeInputEdited: () => void
  onChangeInputNotEdited: (event: ChangeEvent<HTMLInputElement>, defaultData: any) => void
  onChangeKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export type AccountEditInputForm = {
  nickName: string
  intro: string
  picture: string
  snsAccounts: ItemLinkType[]
  jobGroup: string
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

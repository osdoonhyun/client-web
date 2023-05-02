import { ChangeEvent, MutableRefObject } from 'react'

//sns 계정 추가 타입
export type ItemLinkType = {
  id: number
  link: string
}

export type AccountEditUIProps = {
  fileUploadRef: React.RefObject<HTMLInputElement>
  nextId: MutableRefObject<number>
  snsLinks: ItemLinkType[]
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
  onClickUploadButton: () => void
}

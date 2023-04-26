import { ReactNode } from 'react'

export type FileUploadProps = {
  index?: number
  type: 'file' | 'profile'
  fileUrl: string | undefined
  width?: number | string
  height?: number | string
  onChangeFile: (file: File, index: number) => void\
  fileUploadRef?: React.RefObject<HTMLInputElement>
  children?: ReactNode
}

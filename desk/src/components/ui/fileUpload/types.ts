import { ReactNode } from 'react'

export type FileUploadProps = {
  index?: number
  type: 'file' | 'profile'
  fileUrl: string | null
  defaultFileUrl?: string
  width?: number | string
  height?: number | string
  onChangeFileUrls: (fileUrl: string, index: number) => void
  fileUploadRef?: React.RefObject<HTMLInputElement>
  children?: ReactNode
}

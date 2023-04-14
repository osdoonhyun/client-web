export type FileUploadProps = {
  index?: number
  type: 'file' | 'profile'
  fileUrl: string | null
  defaultFileUrl?: string
  width?: number
  height?: number
  onChangeFileUrls: (fileUrl: string, index: number) => void
}

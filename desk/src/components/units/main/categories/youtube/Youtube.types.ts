import { TYoutube } from '@/src/commons/types/generated/types'

export type YoutubeUIProps = {
  youtubeData: TYoutube[]
  selectedVideo: string
  onClickSelectedVideo: (videoUrl: string) => void
  onClickCloseModal: () => void
}

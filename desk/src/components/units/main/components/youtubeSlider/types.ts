import { TYoutube } from '@/src/commons/types/generated/types'

export interface YoutubeSliderProps {
  youtubeData: TYoutube[]
  onClickSelectedVideo: (videoUrl: string) => void
}

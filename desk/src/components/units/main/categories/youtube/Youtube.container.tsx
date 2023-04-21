import ErrorMessage from '@/src/components/ui/errorMessage'
import CustomSpinner from '@/src/components/ui/spinner'
import YoutubeUI from './Youtube.presenter'
import { useQuery } from '@apollo/client'
import { useState, useCallback } from 'react'
import { TQuery, TYoutube } from '@/src/commons/types/generated/types'
import { FETCH_YOUTUBE } from './Youtube.queries'
import { YoutubeUIProps } from './Youtube.types'

export default function Youtube() {
  const { loading, error, data } = useQuery<Pick<TQuery, 'fetchYoutube'>>(FETCH_YOUTUBE)
  const [selectedVideo, setSelectedVideo] = useState<string>('')

  const onClickSelectedVideo = useCallback((videoUrl: string) => {
    setSelectedVideo(videoUrl)
  }, [])

  const onClickCloseModal = useCallback(() => {
    setSelectedVideo('')
  }, [])

  if (loading) {
    return <CustomSpinner />
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const youtubeData: TYoutube[] = data?.fetchYoutube || []
  const youtubeUIProps: YoutubeUIProps = {
    youtubeData,
    selectedVideo,
    onClickSelectedVideo,
    onClickCloseModal,
  }
  return <YoutubeUI {...youtubeUIProps} />
}

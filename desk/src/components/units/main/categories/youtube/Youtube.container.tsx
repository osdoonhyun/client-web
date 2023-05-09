import ErrorMessage from '@/src/components/ui/errorMessage'
import CustomSpinner from '@/src/components/ui/customSpinner'
import YoutubeUI from './Youtube.presenter'
import { useQuery } from '@apollo/client'
import { useState, useCallback } from 'react'
import { TQuery, TYoutube } from '@/src/commons/types/generated/types'
import { FETCH_YOUTUBE } from './Youtube.queries'
import { YoutubeUIProps } from './Youtube.types'
import { Center } from '@chakra-ui/react'

export default function Youtube() {
  const { loading, error, data } = useQuery<Pick<TQuery, 'fetchYoutube'>>(FETCH_YOUTUBE)
  const [selectedVideo, setSelectedVideo] = useState<string>('')

  const onClickSelectedVideo = useCallback((videoUrl: string) => {
    setSelectedVideo(videoUrl)
  }, [])

  const onClickCloseModal = useCallback(() => {
    setSelectedVideo('')
  }, [])

  const youtubeData: TYoutube[] = data?.fetchYoutube || []
  const youtubeUIProps: YoutubeUIProps = {
    youtubeData,
    selectedVideo,
    onClickSelectedVideo,
    onClickCloseModal,
  }

  if (loading) {
    return (
      <>
        <Center h="370px">
          <CustomSpinner />
        </Center>
      </>
    )
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  return <YoutubeUI {...youtubeUIProps} />
}

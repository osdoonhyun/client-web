import { useQuery } from '@apollo/client'
import ErrorMessage from '@/src/components/ui/errorMessage'
import CustomSpinner from '@/src/components/ui/spinner'
import YoutubeUI, { YoutubeUIProps } from './Youtube.presenter'
import { TQuery, TYoutube } from '@/src/commons/types/generated/types'
import { FETCH_YOUTUBE } from './Youtube.queries'

export default function Youtube() {
  const { loading, error, data } = useQuery<Pick<TQuery, 'fetchYoutube'>>(FETCH_YOUTUBE)

  if (loading) {
    return <CustomSpinner />
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const youtubeData: TYoutube[] = data?.fetchYoutube || []
  const youtubeUIProps: YoutubeUIProps = {
    youtubeData,
  }
  return <YoutubeUI {...youtubeUIProps} />
}

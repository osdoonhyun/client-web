import { TUser } from '@/src/commons/types/generated/types'

export type JobGroupMoreUIProps = {
  userData: TUser[] | undefined
  jobGroupData: string[]
  selectedJobGroup: string
  onLoadMore: () => void
  onJobGroupChange: (jobGroup: string) => void
  onClickUserDetail: (userId: string) => void
}

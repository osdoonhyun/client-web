import { useRouter } from 'next/router'
import JobGroupUI from './JobGroup.presenter'

export default function JobGroup() {
  const router = useRouter()

  const JOB_GROUP = [
    'IT',
    '마케팅 / 광고',
    '디자인',
    '미디어 / 엔터',
    '교육',
    '학생',
    '기타',
  ]

  const categoryTitle = '👨🏻‍💻 직군 별 책상 구경하기'

  const onClickMoveToJobGroupMore = (jobGroup: string) => {
    router.push({
      pathname: '/jobGroupMore',
      query: { jobGroup },
    })
  }

  return (
    <>
      <JobGroupUI
        categoryTitle={categoryTitle}
        jobGroupName={JOB_GROUP}
        onClickMoveToJobGroupMore={onClickMoveToJobGroupMore}
      />
    </>
  )
}

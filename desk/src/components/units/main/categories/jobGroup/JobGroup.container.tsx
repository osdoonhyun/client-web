import { useRouter } from 'next/router'
import JobGroupUI from './JobGroup.presenter'

export default function JobGroup() {
  const router = useRouter()

  const onClickMoveToJobGroupMore = () => {
    router.push('/jobGroupMore')
  }

  const JOB_GROUP = [
    'IT',
    '마케팅 / 광고',
    '디자인',
    <span key="media-entertainment">
      미디어 / <br /> 엔터테인먼트
    </span>,
    '교육',
    '학생',
    '기타',
  ]

  const categoryTitle = '👨🏻‍💻 직군 별 책상 구경하기'

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

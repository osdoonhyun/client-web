import JobGroupMoreUI from './JobGroupMore.presenter'
import { TQuery } from '@/src/commons/types/generated/types'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FETCH_USERS } from './JobGroupMore.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'
import { Center } from '@chakra-ui/react'

export default function JobGroupMore() {
  const { data, loading, error } = useQuery<Pick<TQuery, 'fetchUsers'>>(FETCH_USERS)
  const router = useRouter()

  const JOB_GROUP = [
    '전체',
    'IT',
    '마케팅 / 광고',
    '디자인',
    '미디어 / 엔터',
    '교육',
    '학생',
    '기타',
  ]

  const initialJobGroup = Array.isArray(router.query.jobGroup)
    ? router.query.jobGroup[0]
    : router.query.jobGroup || JOB_GROUP[0]

  const [selectedJobGroup, setSelectedJobGroup] = useState(initialJobGroup)

  const jobGroupMapping: Record<string, string> = {
    '마케팅 / 광고': '마케팅',
    '미디어 / 엔터': '미디어',
    디자인: '디자인',
    교육: '교육',
    학생: '학생',
    개발자: 'IT',
    IT: 'IT',
    기타: '기타',
    미선택: '기타',
    '': '기타',
  }

  const filteredUsers =
    selectedJobGroup === '전체'
      ? data?.fetchUsers
      : data?.fetchUsers.filter(
          user =>
            (jobGroupMapping[user.jobGroup] || user.jobGroup) ===
            jobGroupMapping[selectedJobGroup],
        )

  const handleOnLoadMore = () => {
    console.log('더보기')
  }

  const onClickUserDetail = (userId: string) => {
    router.push(`/${userId}`)
  }

  if (loading) {
    return (
      <>
        <Center h="600px">
          <CustomSpinner />
        </Center>
      </>
    )
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  return (
    <>
      <JobGroupMoreUI
        jobGroupData={JOB_GROUP}
        selectedJobGroup={selectedJobGroup}
        onJobGroupChange={setSelectedJobGroup}
        userData={filteredUsers}
        onLoadMore={handleOnLoadMore}
        onClickUserDetail={onClickUserDetail}
      />
    </>
  )
}

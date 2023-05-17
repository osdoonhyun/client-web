import JobGroupMoreUI from './JobGroupMore.presenter'
import { TQuery } from '@/src/commons/types/generated/types'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_USERS } from './JobGroupMore.queries'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'
import { Center } from '@chakra-ui/react'

export default function JobGroupMore() {
  const { data, loading, error } = useQuery<Pick<TQuery, 'fetchUsers'>>(FETCH_USERS)

  const router = useRouter()

  const JOB_GROUP = ['IT', '마케팅 / 광고', '디자인', '미디어', '교육', '학생', '기타']

  if (loading) {
    return (
      <>
        <Center h="500px">
          <CustomSpinner />
        </Center>
      </>
    )
  }
  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const userData = data?.fetchUsers
  if (!userData || userData.length === 0) {
    return <p>해당 직군에 등록된 유저 정보가 없습니다.</p>
  }

  const handleOnLoadMore = () => {
    console.log('더보기')
  }

  const onClickUserDetail = (userId: string) => {
    router.push(`/${userId}`)
  }

  return (
    <>
      <JobGroupMoreUI
        jobGroupData={JOB_GROUP}
        userData={data.fetchUsers}
        onLoadMore={handleOnLoadMore}
        onClickUserDetail={onClickUserDetail}
      />
    </>
  )
}

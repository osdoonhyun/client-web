import UserUI from './User.presenter'
import { useCallback, useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAuth } from '@/src/commons/hooks/useAuth'
import { UserProps } from './User.types'
import { useMutation, useQuery } from '@apollo/client'
import { UPDATE_FOLLOWING } from './User.queries'
import {
  TMutation,
  TMutationUpdateFollowingArgs,
  TQuery,
} from '@/src/commons/types/generated/types'
import {
  FETCH_FOLLOWEES,
  FETCH_FOLLOWINGS,
} from './components/followModal/FollowModal.queries'

export default function User(props: UserProps) {
  const router = useRouter()
  const toast = useToast()

  const [isMyPage, setIsMyPage] = useState(false)
  const [isFollowing, setIsFollowing] = useState<boolean>(false)
  const { isLoggedIn, myUserInfo, openModal } = useAuth()

  const [updateFollowing] = useMutation<
    Pick<TMutation, 'updateFollowing'>,
    TMutationUpdateFollowingArgs
  >(UPDATE_FOLLOWING)

  // 여기서 쿼리를 가져온 이유: 필로우 버튼 클릭 시 refetch 시켜주기 위해
  const { data: followeesData, refetch: refetchFollowees } = useQuery<
    Pick<TQuery, 'fetchFollowees'>
  >(FETCH_FOLLOWEES, {
    variables: { userid: props.userData.user.id as string },
  })

  const { data: followingsData, refetch: refetchFollowings } = useQuery<
    Pick<TQuery, 'fetchFollowings'>
  >(FETCH_FOLLOWINGS, {
    variables: { userid: props.userData.user.id as string },
  })

  const refetchFollowData = async () => {
    await Promise.all([refetchFollowees(), refetchFollowings()])
  }

  const onClickMoveToAccountEdit = useCallback(() => {
    router.push('/accountEdit')
  }, [])

  const onClickFollowingButton = async () => {
    if (!isLoggedIn) {
      openModal('LOGIN')
      return
    }

    await updateFollowing({ variables: { followingid: props.userData.user.id } })
      .then(result => {
        const updateValue = result.data?.updateFollowing ?? false
        setIsFollowing(updateValue)
      })
      .catch(error => {
        if (error instanceof Error) {
          toast({
            title: '에러',
            description: `${error.message}`,
            status: 'error',
            position: 'top',
          })
        }
      })
  }

  useEffect(() => {
    if (myUserInfo?.id === props.userData?.user.id) {
      setIsMyPage(true)
    } else {
      setIsMyPage(false)
    }
  }, [myUserInfo?.id, props.userData?.user.id])

  useEffect(() => {
    const targetId = myUserInfo?.id
    const targetData = followeesData?.fetchFollowees.find(data => data.id === targetId)

    if (targetData?.followeeStatus) {
      setIsFollowing(true)
    }

    refetchFollowData()
  }, [followeesData, myUserInfo])

  useEffect(() => {
    refetchFollowData()
  }, [isFollowing])

  return (
    <UserUI
      userData={props.userData}
      isLoggedIn={isLoggedIn}
      isMyPage={isMyPage}
      isFollowing={isFollowing}
      onClickMoveToAccountEdit={onClickMoveToAccountEdit}
      onClickFollowingButton={onClickFollowingButton}
      followeesData={followeesData}
      followingsData={followingsData}
    />
  )
}

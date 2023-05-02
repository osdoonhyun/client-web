import { useBoolean } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import UserUI from './User.presenter'
import { useAuth } from '@/src/commons/hooks/useAuth'
import { UserProps } from './User.types'
import { useMutation } from '@apollo/client'
import { UPDATE_FOLLOWING } from './User.queries'
import {
  TMutation,
  TMutationUpdateFollowingArgs,
} from '@/src/commons/types/generated/types'

export default function User(props: UserProps) {
  const router = useRouter()
  // API 받은 후 수정 계획
  const [isMyPage, setIsMyPage] = useState(true)
  const [isFollowing, setIsFollowing] = useState<boolean>(
    props.userData.user.followingStatus,
  )
  const { isLoggedIn } = useAuth()
  const [updateFollowing] = useMutation<
    Pick<TMutation, 'updateFollowing'>,
    TMutationUpdateFollowingArgs
  >(UPDATE_FOLLOWING)

  const onClickMoveToAccountEdit = useCallback(() => {
    router.push('/accountEdit')
  }, [])

  const onClickFollowingButton = async () => {
    await updateFollowing({
      variables: {
        followingid: props.userData.user.id,
      },
    })
    setIsFollowing(prevIsFollowing => !prevIsFollowing)
  }

  return (
    <UserUI
      userData={props.userData}
      isLoggedIn={isLoggedIn}
      isMyPage={isMyPage}
      isFollowing={isFollowing}
      onClickMoveToAccountEdit={onClickMoveToAccountEdit}
      onClickFollowingButton={onClickFollowingButton}
    />
  )
}

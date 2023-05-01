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

const TabID = {
  USER_POSTS: 0,
  USER_PRODUCT_POSTS: 1,
  USER_LIKED_POSTS: 2,
}

export default function User(props: UserProps) {
  const router = useRouter()
  const [isLiked, { toggle: toggleIsLiked }] = useBoolean()
  const [showUserPosts, setShowUserPosts] = useState(true)
  const [showUserProductPosts, setShowUserProductPosts] = useState(false)
  const [showLikedPosts, setShowLikedPosts] = useState(false)
  // API 받은 후 수정 계획
  const [isMyPage, setIsMyPage] = useState(false)
  const { isLoggedIn } = useAuth()
  const [updateFollowing] = useMutation<
    Pick<TMutation, 'updateFollowing'>,
    TMutationUpdateFollowingArgs
  >(UPDATE_FOLLOWING)

  const handleShowUserPosts = () => {
    setShowUserPosts(true)
    setShowUserProductPosts(false)
    setShowLikedPosts(false)
    console.log('유저 게시물 클릭')
  }

  const handleShowLikedPosts = () => {
    setShowUserPosts(false)
    setShowUserProductPosts(false)
    setShowLikedPosts(true)
    console.log('좋아요 게시물 모아보기 클릭')
  }

  const handleShowUserProductPosts = () => {
    setShowUserPosts(false)
    setShowUserProductPosts(true)
    setShowLikedPosts(false)
    console.log('유저 사용품 모아보기 클릭')
  }

  const onClickTab = useCallback((id: number) => {
    if (id === TabID.USER_POSTS) {
      handleShowUserPosts()
    } else if (id === TabID.USER_PRODUCT_POSTS) {
      handleShowUserProductPosts()
    } else if (id === TabID.USER_LIKED_POSTS) {
      handleShowLikedPosts()
    }
  }, [])

  const onClickMoveToAccountEdit = useCallback(() => {
    router.push('/accountEdit')
  }, [])

  const onClickFollowingButton = async () => {
    await updateFollowing({
      variables: {
        followingid: props.userData.user.id,
      },
    })
  }

  return (
    <UserUI
      userData={props.userData}
      isLoggedIn={isLoggedIn}
      isMyPage={isMyPage}
      isLiked={isLiked}
      toggleIsLiked={toggleIsLiked}
      showUserPosts={showUserPosts}
      onClickMoveToAccountEdit={onClickMoveToAccountEdit}
      onClickFollowingButton={onClickFollowingButton}
      showUserProductPosts={showUserProductPosts}
      showLikedPosts={showLikedPosts}
      onClickTab={onClickTab}
    />
  )
}

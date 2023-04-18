import { useBoolean } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import UserUI from './User.presenter'

export default function User() {
  const [isLiked, { toggle: toggleIsLiked }] = useBoolean()

  const [showUserPosts, setShowUserPosts] = useState(true)
  const [showLikedPosts, setShowLikedPosts] = useState(false)
  // API 받은 후 수정 계획
  const [isMyPage, setIsMyPage] = useState(true)

  const onClickShowUserPosts = useCallback(() => {
    setShowUserPosts(true)
    setShowLikedPosts(false)
  }, [])

  const onClickShowLikedPosts = useCallback(() => {
    setShowUserPosts(false)
    setShowLikedPosts(true)
  }, [])

  return (
    <UserUI
      isMyPage={isMyPage}
      isLiked={isLiked}
      setIsLiked={toggleIsLiked}
      showUserPosts={showUserPosts}
      showLikedPosts={showLikedPosts}
      onClickShowUserPosts={onClickShowUserPosts}
      onClickShowLikedPosts={onClickShowLikedPosts}
    />
  )
}

import { useBoolean } from '@chakra-ui/react'
import { useState } from 'react'
import UserUI from './User.presenter'

export default function User() {
  const [isLiked, setIsLiked] = useBoolean()

  const [showUserPosts, setShowUserPosts] = useState(true)
  const [showLikedPosts, setShowLikedPosts] = useState(false)
  // API 받은 후 수정 계획
  const [isMyPage, setIsMyPage] = useState(true)

  const onClickShowUserPosts = () => {
    setShowUserPosts(true)
    setShowLikedPosts(false)
  }

  const onClickShowLikedPosts = () => {
    setShowUserPosts(false)
    setShowLikedPosts(true)
  }
  return (
    <UserUI
      isMyPage={isMyPage}
      isLiked={isLiked}
      setIsLiked={setIsLiked}
      showUserPosts={showUserPosts}
      showLikedPosts={showLikedPosts}
      onClickShowUserPosts={onClickShowUserPosts}
      onClickShowLikedPosts={onClickShowLikedPosts}
    />
  )
}

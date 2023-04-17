import { useBoolean } from '@chakra-ui/react'
import { useState } from 'react'
import UserUI from './User.presenter'

export default function User() {
  const [isLiked, setIsLiked] = useBoolean()
  //TODO: 가독성이 좋아서 이렇게 했는데, 하나의 state로 하는게 나을까요?
  const [showUserPosts, setShowUserPosts] = useState(true)
  const [showLikedPosts, setShowLikedPosts] = useState(false)

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
      isLiked={isLiked}
      setIsLiked={setIsLiked}
      showUserPosts={showUserPosts}
      showLikedPosts={showLikedPosts}
      onClickShowUserPosts={onClickShowUserPosts}
      onClickShowLikedPosts={onClickShowLikedPosts}
    />
  )
}

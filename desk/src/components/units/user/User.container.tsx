import { useBoolean } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import UserUI from './User.presenter'

export default function User() {
  const router = useRouter()
  const [isLiked, { toggle: toggleIsLiked }] = useBoolean()

  const [showUserPosts, setShowUserPosts] = useState(true)
  const [showUserProductPosts, setShowUserProductPosts] = useState(false)
  const [showLikedPosts, setShowLikedPosts] = useState(false)
  // API 받은 후 수정 계획
  const [isMyPage, setIsMyPage] = useState(true)

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
    if (id === 0) {
      handleShowUserPosts()
    } else if (id === 1) {
      handleShowUserProductPosts()
    } else if (id === 2) {
      handleShowLikedPosts()
    }
  }, [])

  const onClickMoveToAccountEdit = () => {
    router.push('/accountEdit')
  }

  return (
    <UserUI
      isMyPage={isMyPage}
      isLiked={isLiked}
      toggleIsLiked={toggleIsLiked}
      showUserPosts={showUserPosts}
      showUserProductPosts={showUserProductPosts}
      showLikedPosts={showLikedPosts}
      onClickTab={onClickTab}
    />
  )
}

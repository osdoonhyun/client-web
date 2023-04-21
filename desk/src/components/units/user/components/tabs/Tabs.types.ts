export type NavigationTabsProps = {
  isMyPage: boolean
  showUserPosts: boolean
  showUserProductPosts: boolean
  showLikedPosts: boolean
  isLiked: boolean
  toggleIsLiked: () => void
  onClickTab: (id: number) => void
}

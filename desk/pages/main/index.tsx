import Best from '@/src/components/units/main/categories/best/Best.container'
import Recent from '@/src/components/units/main/categories/recent/Recent.container'
import Like from '@/src/components/units/main/categories/like/Like.container'
import FolloweesBoards from '@/src/components/units/main/categories/followeesBoards/FolloweesBoards.container'
import Youtube from '@/src/components/units/main/categories/youtube/Youtube.container'
import AllProducts from '@/src/components/units/main/categories/allProducts/AllProducts.container'
import BoardsRegisterButton from '@/src/components/units/main/components/boardsRegisterButton'

export default function MainPage() {
  return (
    <>
      <Best />
      <Recent />
      {/* <Like /> */}
      {/* <FolloweesBoards /> */}
      <Youtube />
      <AllProducts />
      <BoardsRegisterButton />
    </>
  )
}

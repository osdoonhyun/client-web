import AllProducts from '@/src/components/units/main/categories/allProducts/AllProducts.container'
import Best from '@/src/components/units/main/categories/best/Best.container'
import Recent from '@/src/components/units/main/categories/recent/Recent.container'
import Youtube from '@/src/components/units/main/categories/youtube/Youtube.container'
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

import Best from '@/src/components/units/main/categories/best/Best.container'
import Recent from '@/src/components/units/main/categories/recent/Recent.container'
import Youtube from '@/src/components/units/main/categories/youtube/Youtube.container'
import BoardsRegisterButton from '@/src/components/units/main/components/boardsRegisterButton'

export default function MainPage() {
  return (
    <>
      <Best />
      <Recent />
      <Youtube />
      <BoardsRegisterButton />
    </>
  )
}

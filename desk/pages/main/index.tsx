import Best from '@/src/components/units/main/best/Best.container'
import Recent from '@/src/components/units/main/recent/Recent.container'
import Youtube from '@/src/components/units/main/youtube/Youtube.container'
import BoardsRegisterButton from '@/src/components/units/main/boardsRegisterButton'

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

import LayoutHeader from '@/src/commons/libraries/layout/header/LayoutHeader.container'
import LayoutFooter from '@/src/commons/libraries/layout/footer/LayoutFooter.container'
import Best from '@/src/components/units/main/best/Best.container'
import Recent from '@/src/components/units/main/recent/Recent.container'
import Youtube from '@/src/components/units/main/youtube/Youtube.container'

export default function MainPage() {
  return (
    <>
      <LayoutHeader />
      <Best />
      <Recent />
      <Youtube />
      <LayoutFooter />
    </>
  )
}

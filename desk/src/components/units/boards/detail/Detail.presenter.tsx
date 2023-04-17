import Carousel from '@/src/components/ui/carousel'
import ProfileHeader from '../components/profileHeader'
import TagWithCountState from '../components/tagWithCountState'

export default function BoardDetailUI() {
  return (
    <>
      <ProfileHeader />
      <Carousel />
      <TagWithCountState />
    </>
  )
}

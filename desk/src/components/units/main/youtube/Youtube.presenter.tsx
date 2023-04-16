import { Center } from '@chakra-ui/react'
import YoutubeImageStyle from '@/src/components/ui/YoutubeImageStyle'
import CategoryHeader from '../categoryHeader/CategoryHeader.container'

export default function YoutubeUI() {
  const categoryTitle = '유튜브'

  return (
    <>
      <CategoryHeader categoryTitle={categoryTitle} />
      <Center m={2}>
        {/* 이미지 UI 구성을 위한 임시 Key값. 추후 api 연결 시 수정 예정 */}
        {[1, 1, 1].map(num => (
          <Center key={num} m={'10px'}>
            <YoutubeImageStyle src={`/YoutubeTest${num}.jpeg`} alt={`test image${num}`} />
          </Center>
        ))}
      </Center>
    </>
  )
}

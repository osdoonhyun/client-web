import { Center } from '@chakra-ui/react'
import MainImageStyle from '@/src/components/ui/mainImageStyle'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'

export default function FollowingUI() {
  const categoryTitle = 'Following'

  return (
    <>
      <CategoryHeader categoryTitle={categoryTitle} moreButtonHidden={true} />
      <Center m={2}>
        {/* 이미지 UI 구성을 위한 임시 Key값. 추후 api 연결 시 수정 예정 */}
        {[1, 1, 1, 1].map(num => (
          <Center key={num} m={'10px'}>
            <MainImageStyle src={`/test${num}.jpeg`} alt={`test image${num}`} />
          </Center>
        ))}
      </Center>
    </>
  )
}

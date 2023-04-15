import { Center } from '@chakra-ui/react'
import MainImageStyle from '@/src/components/ui/mainImageStyle'
import CategoryHeader from '../categoryHeader/CategoryHeader.container'

export default function BestUI() {
  const categoryTitle = 'Best'

  return (
    <>
      <CategoryHeader categoryTitle={categoryTitle} />
      <Center m={2}>
        {[1, 1, 1, 1].map(num => (
          <Center key={num} m={'10px'}>
            <MainImageStyle src={`/test${num}.jpeg`} alt={`test image${num}`} />
          </Center>
        ))}
      </Center>
    </>
  )
}

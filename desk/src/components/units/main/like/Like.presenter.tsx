import MainImageStyle from '@/src/components/ui/mainImageStyle'
import { Center } from '@chakra-ui/react'

export default function LikeUI() {
  return (
    <>
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

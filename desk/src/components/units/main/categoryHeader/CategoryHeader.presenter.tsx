import { Container, Text } from '@chakra-ui/react'
import { CategoryHeaderUIProps } from './CategoryHeader.types'

export default function CategoryHeaderUI({ categoryTitle }: CategoryHeaderUIProps) {
  return (
    <>
      <Container
        maxW="1090px"
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        mt="30px"
        color="dGray.dark"
        fontWeight="600">
        <Text>{categoryTitle}</Text>
        <Text>더보기 {`>`}</Text>
      </Container>
    </>
  )
}

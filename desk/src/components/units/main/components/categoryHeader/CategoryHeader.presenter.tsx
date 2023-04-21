import { Container, Text, useColorModeValue } from '@chakra-ui/react'
import { CategoryHeaderUIProps } from './CategoryHeader.types'

export default function CategoryHeaderUI(props: CategoryHeaderUIProps) {
  return (
    <>
      <Container
        maxW="1090px"
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        mt="30px"
        color={useColorModeValue('dGray.dark', 'dGray.light')}
        fontWeight="600">
        <Text>{props.categoryTitle}</Text>
        {props.moreButtonHidden && <Text>더보기 {`>`}</Text>}
      </Container>
    </>
  )
}

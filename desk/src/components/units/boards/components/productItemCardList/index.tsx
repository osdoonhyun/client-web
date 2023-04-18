import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ProductItemCardProps } from './types'

export default function ProductItemCardList(props: ProductItemCardProps) {
  return (
    <VStack align={'flex-start'}>
      <Text fontSize={18} fontWeight={800} color={'dGray.dark'} pt={'10px'}>
        {props.title}
      </Text>
      <Flex justify={'flex-start'} align={'center'} wrap={'wrap'}>
        <Card w="30%">
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">상품명</Heading>
              <Text noOfLines={2}>상품설명</Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </VStack>
  )
}

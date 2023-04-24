import { Card, CardBody, Image, Text, VStack } from '@chakra-ui/react'

export default function ProductItem() {
  return (
    <VStack>
      <Card>
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            borderRadius="lg"
          />
          <Text mt="6">상품명</Text>
        </CardBody>
      </Card>
    </VStack>
  )
}

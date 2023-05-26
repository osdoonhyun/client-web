import { Box, Card, CardBody, Image, Text, VStack } from '@chakra-ui/react'

export type ProductItemProps = {
  index: number
  productId: string
  boardId: string
  imageUrl: string
  productName: string
  onClickProductItem: (boardId: string) => void
}

export default function ProductItem(props: ProductItemProps) {
  return (
    <Box key={props.index}>
      <Card
        h="260px"
        cursor="pointer"
        onClick={() => props.onClickProductItem(props.boardId)}>
        <CardBody>
          <Image
            height="150px"
            width={'100%'}
            objectFit={'cover'}
            src={props.imageUrl ?? ''}
            borderRadius="lg"
          />
          <Text noOfLines={2} mt="6">
            {props.productName}
          </Text>
        </CardBody>
      </Card>
    </Box>
  )
}

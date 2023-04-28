import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { ProductItemCardProps } from './types'

export default function ProductItemCardList(props: ProductItemCardProps) {
  return (
    <VStack align={'stretch'}>
      <Text
        fontSize={18}
        fontWeight={800}
        color={useColorModeValue('dBlack', 'dGray.light')}
        pt={'10px'}>
        {props.title}
      </Text>
      <SimpleGrid columns={{ lg: 3, sm: 2 }} spacing={'10px'}>
        {props.products.map((product, index) => (
          <Box
            key={index}
            _hover={{ transform: 'scale(1.02)', filter: 'brightness(120%)' }}>
            <Link href={product.url} isExternal>
              <Card
                boxShadow={'md'}
                bgColor={useColorModeValue('dGray.light', '#bababa1e')}>
                <CardBody>
                  <Image
                    height={'150px'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={product.picture ?? ''}
                    borderRadius="lg"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading noOfLines={2} size="md">
                      {product.name}
                    </Heading>
                    <Text noOfLines={2}>{product.description}</Text>
                  </Stack>
                </CardBody>
              </Card>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  )
}

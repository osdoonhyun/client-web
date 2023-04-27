import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { ProductItemCardProps } from './types'
// import Link from 'next/link'

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
      <HStack justify={'flex-start'} align={'center'} wrap={'wrap'} spacing={0}>
        {props.products.map((product, index) => (
          <Box
            key={index}
            w={{ lg: '33.3%', sm: '50%' }}
            p={'5px'}
            _hover={{ transform: 'scale(1.02)', filter: 'brightness(120%)' }}>
            <Link href={product.url} isExternal>
              <Card
                boxShadow={'md'}
                bgColor={useColorModeValue('dGray.light', '#bababa1e')}>
                <CardBody>
                  <Image
                    height={'150px'}
                    src={product.picture ?? ''}
                    alt=""
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
      </HStack>
    </VStack>
  )
}

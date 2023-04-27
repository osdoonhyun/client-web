import ErrorMessage from '@/src/components/ui/errorMessage'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { ItemLinkInputProps, ItemLinkType } from './types'

const INIT_DEFAULT_ITEMS: ItemLinkType[] = [
  {
    id: 1,
    name: '',
    url: '',
  },
  {
    id: 2,
    name: '',
    url: '',
  },
]

export default function ItemLinkInput(props: ItemLinkInputProps) {
  const nextId = useRef(props.maxCount)

  const [items, setItems] = useState<ItemLinkType[]>(
    props.items?.map((item, index) => ({
      id: index + 1,
      name: item.name,
      url: item.url,
    })) ?? INIT_DEFAULT_ITEMS,
  )

  useEffect(() => {
    props.onItems(items)
  }, [items])

  const addItem = () => {
    nextId.current += 1

    setItems(prev => [...prev, { id: nextId.current, name: '', url: '' }])
  }

  const deleteItem = (id: number) => () => {
    if (props.maxCount >= items.length) {
      return
    }

    setItems(items => items.filter(item => item.id !== id))
  }

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setItems(items =>
      items.map(item => (item.id === Number(id) ? { ...item, name: value } : item)),
    )
  }

  const onChangeURL = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setItems(items =>
      items.map(item => (item.id === Number(id) ? { ...item, url: value } : item)),
    )
  }

  const isLastItem = (array: ItemLinkType[], findItem: ItemLinkType) => {
    return findItem.id === Math.max(...array.map(item => item.id))
  }

  return (
    <VStack align={'stretch'}>
      <Text
        fontSize={16}
        fontWeight={700}
        color={useColorModeValue('dGray.dark', 'dGray.light')}
        mb="8px">
        {props.title}
        {props.isRequired && (
          <span style={{ color: '#666CFF', fontSize: '14px' }}>{' *'}</span>
        )}
      </Text>
      {items.map((item, _, array) => (
        <HStack key={item.id} spacing={'10px'}>
          <Input
            id={`${item.id}`}
            name="name"
            placeholder="상품명을 입력해주세요."
            defaultValue={item.name}
            bgColor={useColorModeValue('dGray.light', '#bababa1e')}
            color={useColorModeValue('dBlack', 'dGray.light')}
            width={'25%'}
            onChange={onChangeName}
            _placeholder={{ color: 'dGray.medium' }}
          />
          <Input
            id={`${item.id}`}
            name="link"
            placeholder="상품의 구매처 링크를 입력해주세요. 구매한 사이트가 아니어도 괜찮습니다."
            defaultValue={item.url}
            bgColor={useColorModeValue('dGray.light', '#bababa1e')}
            color={useColorModeValue('dBlack', 'dGray.light')}
            width={'65%'}
            onChange={onChangeURL}
            _placeholder={{ color: 'dGray.medium' }}
          />
          {isLastItem(array, item) ? (
            <HStack spacing={'6px'}>
              <Button
                w={'40px'}
                h={'40px'}
                bgColor={useColorModeValue('dGray.light', '#bababa1e')}
                onClick={addItem}>
                <AddIcon boxSize={3} />
              </Button>
              <Button
                id={`${item.id}`}
                w={'40px'}
                h={'40px'}
                backgroundColor={'clear'}
                bgColor={useColorModeValue('dGray.light', '#bababa1e')}
                onClick={deleteItem(item.id)}>
                <MinusIcon boxSize={3} />
              </Button>
            </HStack>
          ) : (
            <HStack spacing={'6px'}>
              <Button colorScheme="clear" />
              <Button
                id={`${item.id}`}
                w={'40px'}
                h={'40px'}
                backgroundColor={'clear'}
                bgColor={useColorModeValue('dGray.light', '#bababa1e')}
                onClick={deleteItem(item.id)}>
                <MinusIcon boxSize={3} />
              </Button>
            </HStack>
          )}
        </HStack>
      ))}
      <ErrorMessage message={props.errorMessage} />
    </VStack>
  )
}

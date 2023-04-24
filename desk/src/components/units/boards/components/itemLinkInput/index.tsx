import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, Flex, Input, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { ItemLinkInputProps, ItemLinkType } from './types'
import ErrorMessage from '@/src/components/ui/errorMessage'

const INIT_DEFAULT_ITEMS: ItemLinkType[] = [
  {
    id: 1,
    name: '',
    link: '',
  },
  {
    id: 2,
    name: '',
    link: '',
  },
]

export default function ItemLinkInput(props: ItemLinkInputProps) {
  const nextId = useRef(props.maxCount)
  const [items, setItems] = useState<ItemLinkType[]>(INIT_DEFAULT_ITEMS)

  useEffect(() => {
    props.onItems(items)
  }, [items])

  const addItem = () => {
    nextId.current += 1

    setItems(prev => [...prev, { id: nextId.current, name: '', link: '' }])
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

  const onChangeLink = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setItems(items =>
      items.map(item => (item.id === Number(id) ? { ...item, link: value } : item)),
    )
  }

  return (
    <VStack align={'stretch'}>
      <Text
        fontSize={16}
        fontWeight={700}
        color={useColorModeValue('dGray.dark', 'dGray.medium')}
        mb="8px">
        {props.title}
        {props.isRequired && (
          <span style={{ color: '#666CFF', fontSize: '14px' }}>{' *'}</span>
        )}
      </Text>
      {items.map(item => (
        <Flex key={item.id} direction={'row'} justify={'space-between'} align={'center'}>
          <Input
            id={`${item.id}`}
            name="name"
            placeholder="상품명을 입력해주세요."
            bgColor={'white'}
            color={'black'}
            width={'36%'}
            onChange={onChangeName}
            _placeholder={{ color: 'dGray.medium' }}
          />
          <Input
            id={`${item.id}`}
            name="link"
            placeholder="상품의 구매처 링크를 입력해주세요. 구매한 사이트가 아니어도 괜찮습니다."
            bgColor={'white'}
            color={'black'}
            ml={'20px'}
            mr={'20px'}
            onChange={onChangeLink}
            _placeholder={{ color: 'dGray.medium' }}
          />
          {item.id === nextId.current ? (
            <Button
              w={'40px'}
              h={'40px'}
              bgColor={useColorModeValue('dGray.light', 'dGray.medium')}
              onClick={addItem}>
              <AddIcon boxSize={3} />
            </Button>
          ) : (
            <Button
              id={`${item.id}`}
              w={'40px'}
              h={'40px'}
              backgroundColor={'clear'}
              bgColor={useColorModeValue('dGray.light', 'dGray.medium')}
              onClick={deleteItem(item.id)}>
              <MinusIcon boxSize={3} />
            </Button>
          )}
        </Flex>
      ))}
      <ErrorMessage message={props.errorMessage} />
    </VStack>
  )
}

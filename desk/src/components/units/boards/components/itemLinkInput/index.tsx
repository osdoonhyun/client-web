import { TQuery } from '@/src/commons/types/generated/types'
import CustomSpinner from '@/src/components/ui/customSpinner'
import ErrorMessage from '@/src/components/ui/errorMessage'
import { useLazyQuery } from '@apollo/client'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { produce } from 'immer'
import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from 'react'
import OpenGraphPreview from './OpenGraphPreview'
import { FETCH_OPEN_GRAPH } from './queries'
import { ItemLinkInputProps, ItemLinkType } from './types'

const INIT_DEFAULT_ITEMS: ItemLinkType[] = [
  {
    id: 1,
    name: '',
    url: '',
    og: {},
  },
  {
    id: 2,
    name: '',
    url: '',
    og: {},
  },
]

export default function ItemLinkInput(props: ItemLinkInputProps) {
  const nextId = useRef(props.maxCount)

  const [items, setItems] = useState<ItemLinkType[]>(
    props.items?.map((item, index) => ({
      id: index + 1,
      name: item.name ?? '',
      url: item.url,
      og: {},
    })) ?? INIT_DEFAULT_ITEMS,
  )

  const [fetchOpenGraph, { loading: openGraphLoading }] =
    useLazyQuery<Pick<TQuery, 'getOpenGraph'>>(FETCH_OPEN_GRAPH)

  useEffect(() => {
    fetchInitOpenGraphData()
  }, [])

  useEffect(() => {
    props.onItems(items)
  }, [items])

  const addItem = () => {
    nextId.current += 1

    setItems(prev => [...prev, { id: nextId.current, name: '', url: '', og: {} }])
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

  const onBlurURL = async (onBlur: FocusEvent<HTMLInputElement>) => {
    const { id, value } = onBlur.target

    if (value === '') {
      setItems(items =>
        items.map(item => (item.id === Number(id) ? { ...item, og: {} } : item)),
      )
      return
    }

    await fetchOpenGraph({ variables: { url: value } }).then(res => {
      setItems(items =>
        items.map(item =>
          item.id === Number(id) ? { ...item, og: res.data?.getOpenGraph ?? {} } : item,
        ),
      )
    })
  }

  const fetchInitOpenGraphData = () => {
    items.map((item, index) =>
      fetchOpenGraph({ variables: { url: item.url } }).then(res => {
        setItems(items =>
          produce(items, draft => {
            draft[index].og = res.data?.getOpenGraph ?? {}
          }),
        )
      }),
    )
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
        <VStack key={item.id} align={'stretch'}>
          <HStack spacing={'10px'}>
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
              focusBorderColor="dPrimary"
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
              onBlur={onBlurURL}
              _placeholder={{ color: 'dGray.medium' }}
              focusBorderColor="dPrimary"
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
          {openGraphLoading ? <CustomSpinner /> : <OpenGraphPreview item={item} />}
        </VStack>
      ))}
      <ErrorMessage message={props.errorMessage} />
    </VStack>
  )
}

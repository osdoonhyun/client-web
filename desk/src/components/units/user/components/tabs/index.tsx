import {
  Tabs,
  TabList,
  Tab,
  Icon,
  SimpleGrid,
  Center,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { NavigationTabsProps } from './Tabs.types'
import {
  FETCH_BOARDS_USER_LIKED,
  FETCH_USER_PRODUCTS,
  FETCH_USER_BOARDS,
} from './Tabs.queries'
import ProductItem from '../productItem'
import BoardItem from '../boardItem'
import InfiniteScroller from '@/src/components/ui/infiniteScroller'
import { TBoard, TPicture, TProduct, TQuery } from '@/src/commons/types/generated/types'
import { MdFavoriteBorder } from 'react-icons/md'
import { BsColumnsGap } from 'react-icons/bs'
import { AiOutlineLaptop } from 'react-icons/ai'
import { useAuth } from '@/src/commons/hooks/useAuth'
import { useRouter } from 'next/router'

const TabID: Record<number, string> = {
  0: 'UserPosts',
  1: 'UserProducts',
  2: 'UserLikedPosts',
}

const MY_PAGE_TAB = [BsColumnsGap, AiOutlineLaptop, MdFavoriteBorder]
const OTHERS_PAGE_TAB = [BsColumnsGap, AiOutlineLaptop]

export default function NavigationTabs(props: NavigationTabsProps) {
  const { isLoggedIn, myUserInfo } = useAuth()
  const [userData, setUserData] = useState<TBoard[] | TProduct[]>([])

  const router = useRouter()

  const [activeTab, setActiveTab] = useState<string>('UserPosts')

  const { data: userBoards, refetch: refetchUserBoards } = useQuery<
    Pick<TQuery, 'fetchUserBoards'>
  >(FETCH_USER_BOARDS, {
    variables: {
      userid: isLoggedIn ? myUserInfo?.id || '' : '',
      searchid: props.userid as string,
    },
  })

  const { data: userLikedBoards, refetch: refetchUserLikedBoards } = useQuery<
    Pick<TQuery, 'fetchBoardsUserLiked'>
  >(FETCH_BOARDS_USER_LIKED, { variables: { userid: props.userid as string } })

  const { data: userProducts } = useQuery<Pick<TQuery, 'fetchUserProducts'>>(
    FETCH_USER_PRODUCTS,
    {
      variables: { userid: props.userid as string },
    },
  )

  useEffect(() => {
    const fetchData = () => {
      switch (activeTab) {
        case 'UserPosts':
          setUserData(userBoards?.fetchUserBoards ?? [])
          refetchUserBoards()
          break
        case 'UserProducts':
          setUserData(userProducts?.fetchUserProducts ?? [])
          break
        case 'UserLikedPosts':
          setUserData(userLikedBoards?.fetchBoardsUserLiked ?? [])
          refetchUserLikedBoards()
          break
        default:
          setUserData(userBoards?.fetchUserBoards ?? [])
      }
    }

    fetchData()
  }, [userBoards, userLikedBoards, activeTab])

  const onClickTab = (index: number) => {
    setActiveTab(TabID[index])
  }

  const onClickProductItem = (boardId: string) => {
    router.push(`boards/${boardId}`)
  }

  const emptyPostMessage = (activeTab: string) => {
    switch (activeTab) {
      case 'UserPosts':
        return '아직 등록된 게시물이 없습니다.'
      case 'UserProducts':
        return '아직 등록된 장비가 없습니다.'
      case 'UserLikedPosts':
        return "아직 '좋아요'한 게시물이 없습니다."
    }
  }

  const TABS = props.isMyPage ? MY_PAGE_TAB : OTHERS_PAGE_TAB

  return (
    <>
      <Tabs mt={{ base: '20px', md: '30px' }}>
        <TabList color="dGray.medium">
          {TABS.map((icon, index) => (
            <Tab
              onClick={() => onClickTab(index)}
              key={index}
              w={'50%'}
              h="28px"
              py="25px"
              _selected={{ color: 'dPrimary', borderBottomColor: 'dPrimary' }}
              fontSize={{ base: '18px', lg: '22px' }}
              fontWeight="700">
              <Icon as={icon} mr={1} />
            </Tab>
          ))}
        </TabList>
      </Tabs>

      <InfiniteScroller loadMore={() => console.log('무한스크롤')} hasMore={true}>
        {userData.length > 0 ? (
          <SimpleGrid
            mt={{ base: '22px', md: '33px' }}
            columns={{ base: 2, md: 3 }}
            spacing={{ base: '15px', md: '25px' }}>
            {/* TODO:  TYPE item : TBoard | TProduct | undefined */}
            {userData?.map((item: any, index: number) => (
              <React.Fragment key={index}>
                {activeTab === 'UserProducts' ? (
                  <ProductItem
                    index={index}
                    productId={item.id}
                    boardId={item.board?.id}
                    imageUrl={item.picture}
                    productName={item.name}
                    onClickProductItem={onClickProductItem}
                  />
                ) : (
                  <BoardItem
                    index={index}
                    boardId={item?.id}
                    imageUrl={
                      item?.pictures?.find((picture: TPicture) => picture.isMain)?.url ??
                      ''
                    }
                    like={item?.like}
                  />
                )}
              </React.Fragment>
            ))}
          </SimpleGrid>
        ) : (
          <Center
            mt={'160px'}
            fontSize={{ base: 'sm', md: 'md' }}
            color={useColorModeValue('dGray.dark', 'dGray.light')}>
            {emptyPostMessage(activeTab)}
          </Center>
        )}
      </InfiniteScroller>
    </>
  )
}

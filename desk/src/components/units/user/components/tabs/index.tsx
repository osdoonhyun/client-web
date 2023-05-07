import {
  Tabs,
  TabList,
  Tab,
  Icon,
  SimpleGrid,
  Box,
  Image,
  Card,
  CardBody,
  Text,
} from '@chakra-ui/react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { BsColumnsGap } from 'react-icons/bs'
import { AiOutlineLaptop } from 'react-icons/ai'
import { NavigationTabsProps } from './Tabs.types'
import ProductItem from '../productItem'
import BoardItem from '../boardItem'
import InfiniteScroller from '@/src/components/ui/infiniteScroller'
import React, { useCallback, useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import {
  FETCH_BOARDS_USER_LIKED,
  FETCH_USER_PRODUCTS,
  FETCH_USER_BOARDS,
} from './Tabs.queries'
import {
  TBoard,
  TMutation,
  TMutationUpdateBoardLikerArgs,
  TPicture,
  TProduct,
  TQuery,
} from '@/src/commons/types/generated/types'

const TabID = {
  USER_POSTS: 0,
  USER_PRODUCT_POSTS: 1,
  USER_LIKED_POSTS: 2,
}

export default function NavigationTabs(props: NavigationTabsProps) {
  const [showUserPosts, setShowUserPosts] = useState(true)
  const [showUserProductPosts, setShowUserProductPosts] = useState(false)
  const [showLikedPosts, setShowLikedPosts] = useState(false)
  const [userData, setUserData] = useState<TBoard[] | TProduct[]>([])

  const MY_PAGE_TAB = [BsColumnsGap, AiOutlineLaptop, MdFavoriteBorder]
  const OTHERS_PAGE_TAB = [BsColumnsGap, AiOutlineLaptop]

  const { data: userBoards, refetch: refetchUserBoards } = useQuery<
    Pick<TQuery, 'fetchUserBoards'>
  >(FETCH_USER_BOARDS, { variables: { userid: props.userid as string } })
  const { data: userLikedBoards, refetch: refetchUserLikedBoards } = useQuery<
    Pick<TQuery, 'fetchBoardsUserLiked'>
  >(FETCH_BOARDS_USER_LIKED, { variables: { userid: props.userid as string } })
  const { data: userProducts } = useQuery<Pick<TQuery, 'fetchUserProducts'>>(
    FETCH_USER_PRODUCTS,
    {
      variables: { userid: props.userid as string },
    },
  )

  const TABS = props.isMyPage ? MY_PAGE_TAB : OTHERS_PAGE_TAB

  useEffect(() => {
    if (showUserPosts) {
      setUserData(userBoards?.fetchUserBoards ?? [])
    } else if (showLikedPosts) {
      setUserData(userLikedBoards?.fetchBoardsUserLiked ?? [])
    } else if (showUserProductPosts) {
      setUserData(userProducts?.fetchUserProducts ?? [])
    }
  }, [
    showUserPosts,
    showLikedPosts,
    showUserProductPosts,
    userBoards,
    userLikedBoards,
    userProducts,
  ])

  const handleShowUserPosts = () => {
    setShowUserPosts(true)
    setShowUserProductPosts(false)
    setShowLikedPosts(false)
    refetchUserBoards()
  }

  const handleShowLikedPosts = () => {
    setShowUserPosts(false)
    setShowUserProductPosts(false)
    setShowLikedPosts(true)
    refetchUserLikedBoards()
  }

  const handleShowUserProductPosts = () => {
    setShowUserPosts(false)
    setShowUserProductPosts(true)
    setShowLikedPosts(false)
  }

  const onClickTab = useCallback(
    (id: number) => {
      if (id === TabID.USER_POSTS) {
        handleShowUserPosts()
      } else if (id === TabID.USER_PRODUCT_POSTS) {
        handleShowUserProductPosts()
      } else if (id === TabID.USER_LIKED_POSTS) {
        handleShowLikedPosts()
      }
    },
    [showUserPosts, showUserProductPosts, showLikedPosts],
  )

  console.log('USER_DATA+++++++', userData)

  return (
    <>
      <Tabs mt="30px">
        <TabList color="dGray.medium">
          {TABS.map((icon, index) => (
            <Tab
              onClick={() => onClickTab(index)}
              key={index}
              w={'50%'}
              h="28px"
              py="25px"
              _selected={{ color: 'dPrimary', borderBottomColor: 'dPrimary' }}
              fontSize="22px"
              fontWeight="700">
              <Icon as={icon} mr={1} />
            </Tab>
          ))}
        </TabList>
      </Tabs>

      <InfiniteScroller loadMore={() => console.log('무한스크롤')} hasMore={true}>
        <SimpleGrid mt="33px" columns={3} spacing="30px">
          {/* TODO:  TYPE item : TBoard | TProduct | undefined */}
          {userData?.map((item: any, index: number) => (
            <React.Fragment key={index}>
              {showUserProductPosts ? (
                <ProductItem
                  index={index}
                  productId={item.id}
                  imageUrl={item.picture}
                  productName={item.name}
                />
              ) : (
                <BoardItem
                  index={index}
                  boardId={item?.id}
                  imageUrl={
                    item?.pictures.find((picture: TPicture) => picture.isMain)?.url || ''
                  }
                  like={item?.like}
                />
              )}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroller>
    </>
  )
}

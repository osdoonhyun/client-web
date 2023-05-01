import { Tabs, TabList, Tab, Icon, SimpleGrid, Box, Image } from '@chakra-ui/react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { BsColumnsGap } from 'react-icons/bs'
import { AiOutlineLaptop } from 'react-icons/ai'
import { NavigationTabsProps, UserData } from './Tabs.types'
import ProductItem from '../productItem'
import InfiniteScroller from '@/src/components/ui/infiniteScroller'
import { useCallback, useState } from 'react'
import { useQuery } from '@apollo/client'
import {
  FETCH_BOARDS_USER_LIKED,
  FETCH_PRODUCTS,
  FETCH_USER_BOARDS,
} from './Tabs.queries'
import { TQuery } from '@/src/commons/types/generated/types'

const TabID = {
  USER_POSTS: 0,
  USER_PRODUCT_POSTS: 1,
  USER_LIKED_POSTS: 2,
}

export default function NavigationTabs(props: NavigationTabsProps) {
  const [showUserPosts, setShowUserPosts] = useState(true)
  const [showUserProductPosts, setShowUserProductPosts] = useState(false)
  const [showLikedPosts, setShowLikedPosts] = useState(false)

  const MY_PAGE_TAB = [BsColumnsGap, AiOutlineLaptop, MdFavoriteBorder]
  const OTHERS_PAGE_TAB = [BsColumnsGap, AiOutlineLaptop]

  const { data: userBoards } = useQuery<Pick<TQuery, 'fetchUserBoards'>>(
    FETCH_USER_BOARDS,
    {
      variables: { userid: props.userid as string },
    },
  )
  const { data: userLikedBoards } = useQuery<Pick<TQuery, 'fetchBoardsUserLiked'>>(
    FETCH_BOARDS_USER_LIKED,
    {
      variables: { userid: props.userid as string },
    },
  )
  const { data: userProducts } = useQuery<Pick<TQuery, 'fetchProducts'>>(FETCH_PRODUCTS, {
    variables: { userid: props.userid as string },
  })

  const TABS = props.isMyPage ? MY_PAGE_TAB : OTHERS_PAGE_TAB

  let userData: UserData = { data: [] }

  if (showUserPosts && userBoards) {
    userData.data = userBoards
  } else if (showLikedPosts && userLikedBoards) {
    userData.data = userLikedBoards
  } else if (showUserProductPosts && userProducts) {
    userData.data = userProducts
  }

  const handleShowUserPosts = () => {
    setShowUserPosts(true)
    setShowUserProductPosts(false)
    setShowLikedPosts(false)
    console.log('유저 게시물 클릭')
  }

  const handleShowLikedPosts = () => {
    setShowUserPosts(false)
    setShowUserProductPosts(false)
    setShowLikedPosts(true)
    console.log('좋아요 게시물 모아보기 클릭')
  }

  const handleShowUserProductPosts = () => {
    setShowUserPosts(false)
    setShowUserProductPosts(true)
    setShowLikedPosts(false)
    console.log('유저 사용품 모아보기 클릭')
  }

  const onClickTab = useCallback((id: number) => {
    if (id === TabID.USER_POSTS) {
      handleShowUserPosts()
    } else if (id === TabID.USER_PRODUCT_POSTS) {
      handleShowUserProductPosts()
    } else if (id === TabID.USER_LIKED_POSTS) {
      handleShowLikedPosts()
    }
  }, [])

  console.log('NavigationTab', userData.data)

  return (
    <>
      <Tabs mt="auto">
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
      {/* myPage -> columns 3 / !myPage -> columns 2 */}
      {/* API 나오면 수정 작업 필요 */}
      <SimpleGrid mt="33px" columns={3} spacing="30px">
        <InfiniteScroller loadMore={() => console.log('테스트')} hasMore={true}>
          {showUserPosts && (
            <Box pos="relative">
              <Image
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                bg="dGray"
                borderRadius="10px"
              />
              <Box
                pos="absolute"
                zIndex="2"
                top="88%"
                left="88%"
                _hover={
                  props.isLiked
                    ? undefined
                    : {
                        color: 'dGray.medium',
                      }
                }
                color={props.isLiked ? 'dRed.400' : '#fff'}
                onClick={props.toggleIsLiked}>
                {props.isLiked ? (
                  <MdFavorite size="20px" />
                ) : (
                  <MdFavoriteBorder size="20px" />
                )}
              </Box>
            </Box>
          )}
          {showUserProductPosts && <ProductItem />}
          {showLikedPosts && <ProductItem />}
        </InfiniteScroller>
      </SimpleGrid>
    </>
  )
}

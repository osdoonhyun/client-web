import { Tabs, TabList, Tab, Icon, SimpleGrid, Box, Image } from '@chakra-ui/react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { BsColumnsGap } from 'react-icons/bs'
import { AiOutlineLaptop } from 'react-icons/ai'
import { NavigationTabsProps } from './Tabs.types'
import ProductItem from '../productItem'
import InfiniteScroller from '@/src/components/ui/infiniteScroller'

export default function NavigationTabs(props: NavigationTabsProps) {
  const MY_PAGE_TAB = [BsColumnsGap, AiOutlineLaptop, MdFavoriteBorder]
  const OTHERS_PAGE_TAB = [BsColumnsGap, AiOutlineLaptop]

  const TABS = props.isMyPage ? MY_PAGE_TAB : OTHERS_PAGE_TAB

  return (
    <>
      <Tabs mt="auto">
        <TabList color="dGray.medium">
          {TABS.map((icon, index) => (
            <Tab
              onClick={() => props.onClickTab(index)}
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

      {/* API 나오면 수정 작업 필요 */}
      <SimpleGrid mt="33px" columns={3} spacing="30px">
        <InfiniteScroller loadMore={() => console.log('테스트')} hasMore={true}>
          {props.showUserPosts && (
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
          {props.showUserProductPosts && <ProductItem />}
          {props.showLikedPosts && <ProductItem />}
        </InfiniteScroller>
      </SimpleGrid>
    </>
  )
}

import {
  Box,
  Center,
  Container,
  SimpleGrid,
  Tab,
  TabList,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react'
import { TUser } from '@/src/commons/types/generated/types'
import ProfileCard from '../../components/userProfileCard'
import InfiniteScroll from 'react-infinite-scroller'

type JobGroupMoreUIProps = {
  userData: TUser[] | undefined
  jobGroupData: string[]
  selectedJobGroup: string
  onLoadMore: () => void
  onJobGroupChange: (jobGroup: string) => void
  onClickUserDetail: (userId: string) => void
}

export default function JobGroupMoreUI(props: JobGroupMoreUIProps) {
  const TABS = props.jobGroupData.map((job: string, index: number) => job)

  return (
    <>
      <Container
        pt={5}
        h="85vh"
        maxW={'1100px'}
        overflow="auto"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}>
        <Tabs mt="30px" onChange={index => props.onJobGroupChange(TABS[index])}>
          <TabList color={useColorModeValue('dGray.dark', 'dGray.light')}>
            {TABS.map((tab, index) => (
              <Tab
                key={index}
                w={'12.5%'}
                h="28px"
                py="25px"
                _selected={{
                  fontWeight: '800',
                  color: 'dPrimary',
                  borderBottomColor: 'dPrimary',
                }}
                fontSize="md"
                fontWeight="600">
                {tab}
              </Tab>
            ))}
          </TabList>
        </Tabs>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}>
          {props.userData && props.userData.length > 0 ? (
            <SimpleGrid mt="33px" columns={3} spacing="30px">
              {props.userData?.map((user, index) => (
                <ProfileCard
                  key={index}
                  image={user.picture}
                  nickName={user.nickName}
                  followeesCount={user.followeesCount}
                  followingsCount={user.followingsCount}
                  jobGroup={user.jobGroup}
                  onClick={() => props.onClickUserDetail(user.id)}
                />
              ))}
            </SimpleGrid>
          ) : (
            <Center
              mt={'160px'}
              fontSize={{ base: 'sm', md: 'md' }}
              color={useColorModeValue('dGray.dark', 'dGray.light')}>
              해당 직군에 등록된 유저 정보가 없습니다.
            </Center>
          )}
        </InfiniteScroll>
      </Container>
    </>
  )
}

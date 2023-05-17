import {
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
  jobGroupData: string[]
  userData: TUser[]
  onLoadMore: () => void
  onClickUserDetail: (userId: string) => void
}

export default function JobGroupMoreUI(props: JobGroupMoreUIProps) {
  const TABS = props.jobGroupData.map((job: string, index: number) => job)

  return (
    <>
      <Container
        pt={5}
        h="85vh"
        maxW={'1090px'}
        overflow="auto"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}>
        <Tabs mt="30px">
          <TabList color={useColorModeValue('dGray.dark', 'dGray.light')}>
            {TABS.map((tab, index) => (
              <Tab
                key={index}
                w={'15%'}
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
          <SimpleGrid mt="33px" columns={3} spacing="30px">
            {props.userData.map((user, index) => (
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
        </InfiniteScroll>
      </Container>
    </>
  )
}

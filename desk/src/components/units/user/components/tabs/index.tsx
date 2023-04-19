import { Tabs, TabList, Tab, Icon } from '@chakra-ui/react'
import { MdFavoriteBorder } from 'react-icons/md'
import { BsColumnsGap } from 'react-icons/bs'
import { AiOutlineLaptop } from 'react-icons/ai'
import { NavigationTabsProps } from './Tabs.types'

export default function NavigationTabs(props: NavigationTabsProps) {
  const MY_PAGE_TAB = [BsColumnsGap, AiOutlineLaptop, MdFavoriteBorder]
  const OTHERS_PAGE_TAB = [BsColumnsGap, AiOutlineLaptop]

  const TABS = props.isMyPage ? MY_PAGE_TAB : OTHERS_PAGE_TAB

  return (
    // colorScheme 속성에 dPrimary가 적용 안됨
    <Tabs mt="auto" colorScheme="purple">
      <TabList color="dGray.medium">
        {TABS.map((icon, index) => (
          <Tab key={index} w={'50%'} h="28px" py="25px" fontSize="22px" fontWeight="700">
            <Icon as={icon} mr={1} />
          </Tab>
        ))}
      </TabList>
    </Tabs>
  )
}

import { Box, Flex, SimpleGrid, useMediaQuery } from '@chakra-ui/react'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader.container'
import JobGroupCategoryBox from '../../components/jobGroupCategoryBox'
import { JobGroupUIProps } from './JobGroup.types'

export default function JobGroupUI(props: JobGroupUIProps) {
  const [isMobile, isSmallScreen] = useMediaQuery([
    '(max-width: 1050px)',
    '(max-width: 712px)',
  ])

  function calculateGridColumnCount(isMobile: boolean, isSmallScreen: boolean): number {
    if (isMobile) {
      return isSmallScreen ? 3 : 6
    }
    return 7
  }

  const gridColumnCount = calculateGridColumnCount(isMobile, isSmallScreen)

  let jobGroupsToRender = props.jobGroupName

  if (isMobile) {
    jobGroupsToRender = jobGroupsToRender
      .filter(jobGroup => jobGroup !== '기타')
      .slice(0, 6)
  }

  return (
    <>
      <Box pt={4}>
        <CategoryHeader categoryTitle={props.categoryTitle} moreButtonHidden={false} />
      </Box>
      <Flex pb={6} px={3} m="auto" maxW="1100px" justifyContent="center">
        <SimpleGrid columns={gridColumnCount} gap={4}>
          {jobGroupsToRender.map((jobGroup, index) => (
            <JobGroupCategoryBox
              key={index}
              jobGroup={jobGroup}
              onClick={
                typeof jobGroup === 'string'
                  ? () => props.onClickMoveToJobGroupMore(jobGroup)
                  : undefined
              }
            />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  )
}

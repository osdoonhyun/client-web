import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export default function CustomSkeleton() {
  return (
    <>
      <Skeleton h="260px">
        <div>contents wrapped</div>
        <div>wont be visible</div>
      </Skeleton>
    </>
  )
}

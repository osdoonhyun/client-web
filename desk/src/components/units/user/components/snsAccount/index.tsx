import { TSnsAccount } from '@/src/commons/types/generated/types'
import { makeAbsoluteUrl } from '@/src/commons/utils/util'
import { Flex, Icon, Link, Text, useColorModeValue } from '@chakra-ui/react'

import { BsLink45Deg } from 'react-icons/bs'

export type SnsAccountProps = {
  snsAccounts?: Array<TSnsAccount>
}

export default function SnsAccount(props: SnsAccountProps) {
  return (
    <>
      {props.snsAccounts?.map(
        snsAccount =>
          snsAccount.sns && (
            <Link
              id={snsAccount.id}
              key={snsAccount.id}
              fontSize={{ base: 'sm', md: 'md' }}
              href={makeAbsoluteUrl(snsAccount.sns)}
              isExternal
              color={useColorModeValue('#1e5d97', '#c1daf2')}
              fontWeight="600">
              <Flex alignItems="center" justifyContent="flex-start">
                <Icon as={BsLink45Deg} mr={1} />
                <Text>{snsAccount.sns}</Text>
              </Flex>
            </Link>
          ),
      )}
    </>
  )
}

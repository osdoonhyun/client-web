import { useEffect, useState } from 'react'
import { Flex, Icon, Input, Link, VStack } from '@chakra-ui/react'
import { ItemLinkType } from '../../AccountEdit.types'
import { SnsAccountEditProps } from './types'
import { BsLink45Deg } from 'react-icons/bs'

const SNS_ACCOUNT_LINKS: ItemLinkType[] = Array.from({ length: 3 }, () => ({
  id: '',
  link: '',
}))

export default function SnsAccountEdit(props: SnsAccountEditProps) {
  const [snsLinks, setSnsLinks] = useState<ItemLinkType[]>(SNS_ACCOUNT_LINKS)

  useEffect(() => {
    //TODO: reduce 함수 써서 리팩토링 재시도할 것
    if (props.snsAccounts) {
      const updatedLinks: ItemLinkType[] = []

      for (let i = 0; i < props.snsAccounts.length; i++) {
        const snsAccount = props.snsAccounts[i]

        if (snsAccount.sns !== '') {
          updatedLinks.push({
            id: snsAccount.id,
            link: snsAccount.sns,
          })
        }

        if (updatedLinks.length === 3) {
          break
        }
      }

      while (updatedLinks.length < 3) {
        updatedLinks.push({ id: '', link: '' })
      }

      setSnsLinks(updatedLinks)
    }
  }, [props.snsAccounts])

  return (
    <>
      <Flex direction="column" alignItems="stretch" justifyContent="flex-start">
        <VStack align="stretch">
          {snsLinks.map((link, index) => (
            <Flex
              key={index + 1}
              direction="row"
              justifyContent="space-between"
              align="center">
              <Flex align="center">
                <Icon size="16px" as={BsLink45Deg} mr={1} />
                <Link>
                  <Input
                    id={`${index + 1}`}
                    color="#718096"
                    fontSize="18px"
                    {...props.register(`snsAccounts.${index}.link`)}
                    defaultValue={link.link || ''}
                    variant="unstyled"
                    placeholder="SNS 계정 추가"
                    focusBorderColor="dPrimary"
                  />
                </Link>
              </Flex>
            </Flex>
          ))}
        </VStack>
      </Flex>
    </>
  )
}

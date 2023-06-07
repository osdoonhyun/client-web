import { useEffect, useState } from 'react'
import { Flex, Icon, Input, Link, VStack } from '@chakra-ui/react'
import { ItemLinkType } from '../../AccountEdit.types'
import { SnsAccountEditProps } from './types'
import { BsLink45Deg } from 'react-icons/bs'

const SNS_ACCOUNT_LINKS: ItemLinkType[] = Array.from({ length: 3 }, () => ({
  id: '',
  sns: '',
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
            sns: snsAccount.sns,
          })
        }

        if (updatedLinks.length === 3) {
          break
        }
      }

      while (updatedLinks.length < 3) {
        updatedLinks.push({ id: '', sns: '' })
      }

      setSnsLinks(updatedLinks)
    }
  }, [])

  return (
    <>
      <Flex direction="column" alignItems="stretch" justifyContent="flex-start">
        <VStack align="stretch">
          {snsLinks.map((link, index) => (
            <Flex
              key={index}
              direction="row"
              justifyContent="space-between"
              align="center">
              <Flex align="center">
                <Icon size="16px" as={BsLink45Deg} mr={1} />
                <Link>
                  <Input
                    id={link.id || `${index}`}
                    color="#718096"
                    fontSize={{ base: '16px', lg: '18px' }}
                    {...props.register(`snsAccounts.${index}.sns`)}
                    variant="unstyled"
                    // onChange={props.onChangeInputEdited}
                    // onChange={() => {
                    //   props.onChangeInputEdited()
                    //   props.register(`snsAccounts.${index}.link`)
                    // }}
                    onBlur={e => props.onChangeInputNotEdited(e, link.sns)}
                    onKeyDown={props.onChangeKeyDown}
                    placeholder="SNS 계정 추가"
                    focusBorderColor="dPrimary"
                    tabIndex={-1} // Tab 키로 넘어가지 않도록 설정
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

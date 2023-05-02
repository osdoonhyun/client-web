import {
  Flex,
  IconButton,
  IconButtonProps,
  useColorModeValue,
  useEditableControls,
} from '@chakra-ui/react'
import { ChangeEvent, useCallback, useRef, useState } from 'react'
import AccountEditUI from './AccountEdit.presenter'
import { ItemLinkType } from './AccountEdit.types'
import { CheckIcon, EditIcon } from '@chakra-ui/icons'

const SNS_ACCOUNT_LINKS: ItemLinkType[] = [
  {
    id: 1,
    link: '',
  },
]

const SnsLinkCount = {
  MAX: 3,
  MIN: 1,
}

export default function AccountEdit() {
  function EditableControls() {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
      useEditableControls()

    return isEditing ? (
      <Flex justifyContent="center" align="center">
        <IconButton
          ml={'10px'}
          icon={<CheckIcon />}
          {...(getSubmitButtonProps() as IconButtonProps)}
        />
        {/* <IconButton
          icon={<CloseIcon />}
          {...(getCancelButtonProps() as IconButtonProps)}
        /> */}
      </Flex>
    ) : (
      <Flex justifyContent="center" align="center">
        <IconButton
          w="40px"
          h="40px"
          bgColor={useColorModeValue('dGray.light', '#bababa1e')}
          icon={<EditIcon />}
          {...(getEditButtonProps() as IconButtonProps)}
        />
      </Flex>
    )
  }

  const onChangeFileUrl = useCallback((fileUrl: string, index: number) => {
    console.log(fileUrl)
  }, [])
  const onChangeFile = useCallback((file: File, index: number) => {
    console.log(file)
  }, [])

  // sns 계정 추가하기
  const nextId = useRef(SnsLinkCount.MIN)
  const [snsLinks, setSnsLinks] = useState<ItemLinkType[]>(SNS_ACCOUNT_LINKS)

  const addSnsLink = () => {
    if (SnsLinkCount.MAX <= snsLinks.length) {
      return
    }

    nextId.current += 1
    setSnsLinks(prev => [...prev, { id: nextId.current, link: '' }])
  }

  const deleteSnsLink = (id: number) => () => {
    setSnsLinks(links => links.filter(link => link.id !== id))
  }

  const onChangeLink = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setSnsLinks(links =>
      links.map(link => (link.id === Number(id) ? { ...link, link: value } : link)),
    )
  }

  // 프로필 이미지 버튼
  const fileUploadRef = useRef<HTMLInputElement>(null)

  const onClickUploadButton = () => {
    fileUploadRef.current?.click()
  }

  return (
    <AccountEditUI
      fileUploadRef={fileUploadRef}
      nextId={nextId}
      snsLinks={snsLinks}
      SnsLinkCount={SnsLinkCount}
      EditableControls={EditableControls}
      onChangeFileUrl={onChangeFileUrl}
      onChangeFile={onChangeFile}
      addSnsLink={addSnsLink}
      deleteSnsLink={deleteSnsLink}
      onChangeLink={onChangeLink}
      onClickUploadButton={onClickUploadButton}
    />
  )
}

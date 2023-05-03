import {
  Flex,
  IconButton,
  IconButtonProps,
  position,
  useColorModeValue,
  useEditableControls,
  useToast,
} from '@chakra-ui/react'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import AccountEditUI from './AccountEdit.presenter'
import {
  AccountEditInputForm,
  AccountEditSchema,
  ItemLinkType,
} from './AccountEdit.types'
import { CheckIcon, EditIcon } from '@chakra-ui/icons'
import { useAuth } from '@/src/commons/hooks/useAuth'
import { useMutation } from '@apollo/client'
import {
  TMutation,
  TMutationUpdateUserArgs,
  TMutationUploadFileArgs,
} from '@/src/commons/types/generated/types'
import { UPDATE_USER } from './AccountEdit.queries'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UPLOAD_FILE } from '../../ui/fileUpload/quries'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  const toast = useToast()
  // const {register, handleSubmit}
  const [updateUser] = useMutation<
    Pick<TMutation, 'updateUser'>,
    TMutationUpdateUserArgs
  >(UPDATE_USER)
  const { myUserInfo } = useAuth()
  const { register, handleSubmit, setValue, trigger } = useForm<AccountEditInputForm>({
    resolver: yupResolver(AccountEditSchema),
    mode: 'onSubmit',
  })

  const [myJob, setMyJob] = useState('')

  console.log('##################', myJob)

  const onChangeFileUrl = useCallback((fileUrl: string, index: number) => {
    console.log(fileUrl)
  }, [])
  // const onChangeFile = useCallback((file: File, index: number) => {
  //   console.log(file)
  // }, [])

  // const [file, setFile] = useState<File | null>(null)
  const [pictureFile, setPictureFile] = useState<string>('')

  const [uploadFile] = useMutation<
    Pick<TMutation, 'uploadFile'>,
    TMutationUploadFileArgs
  >(UPLOAD_FILE)

  const onChangeFile = useCallback((file: File, index: number) => {
    // setFiles(
    //   produce(draft => {
    //     draft[index] = file
    //   }),
    // )
    // setPictureFile(file)
    // setValue('picture', file)
    // void trigger('picture')
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

  // const onChangeMyJob = (myJob: string) => {
  const onChangeMyJob = () => {
    setValue('jobGroup', myJob)

    void trigger('jobGroup')
  }

  const onClickSubmit = async (data: AccountEditInputForm) => {
    //TODO: Editable로 이동 예정, Toast로 보여줄 예정
    if (data.nickName.length > 20) {
      toast({
        title: '에러',
        description: '닉네임은 최대 20자까지 입력 가능합니다.',
        status: 'error',
        position: 'top',
      })
    }
    if (data.intro.length > 30) {
      toast({
        title: '에러',
        description: '한 줄 소개는 최대 30자까지 입력 가능합니다.',
        status: 'error',
        position: 'top',
      })
    }

    try {
      await updateUser({
        variables: {
          updateUserInput: {
            nickName: data.nickName,
            intro: data.intro,
            picture: data.picture,
            jobGroup: data.jobGroup,
            snsAccount: [],
          },
        },
      })
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: '에러',
          description: error.message,
          status: 'error',
          position: 'top',
        })
      }
    }
    router.back()
  }

  return (
    <AccountEditUI
      myUserInfo={myUserInfo}
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
      onClickSubmit={onClickSubmit}
      // useForm={useFormReturn}
      register={register}
      handleSubmit={handleSubmit}
      myJob={myJob}
      setMyJob={setMyJob}
      // onChangeMyJob={onChangeMyJob}
    />
  )
}

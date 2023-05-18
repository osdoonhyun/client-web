import {
  Flex,
  IconButton,
  IconButtonProps,
  useColorModeValue,
  useEditableControls,
  useToast,
} from '@chakra-ui/react'
import { ChangeEvent, useCallback, useRef, useState } from 'react'
import AccountEditUI from './AccountEdit.presenter'
import {
  AccountEditInputForm,
  AccountEditSchema,
  UpdateUserInput,
} from './AccountEdit.types'
import { CheckIcon, EditIcon } from '@chakra-ui/icons'
import { useAuth } from '@/src/commons/hooks/useAuth'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import {
  TMutation,
  TMutationUpdateUserArgs,
  TMutationUploadFileArgs,
} from '@/src/commons/types/generated/types'
import { UPDATE_USER } from './AccountEdit.queries'
import { yupResolver } from '@hookform/resolvers/yup'
import { UPLOAD_FILE } from '../../ui/fileUpload/quries'
import { produce } from 'immer'

export default function AccountEdit() {
  function EditableControls() {
    const { isEditing, getSubmitButtonProps, getEditButtonProps } = useEditableControls()

    return isEditing ? (
      <Flex justifyContent="center" align="center">
        <IconButton
          ml={'10px'}
          icon={<CheckIcon />}
          {...(getSubmitButtonProps() as IconButtonProps)}
        />
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

  const [updateUser] = useMutation<
    Pick<TMutation, 'updateUser'>,
    TMutationUpdateUserArgs
  >(UPDATE_USER)
  const { myUserInfo } = useAuth()
  const { register, handleSubmit } = useForm<AccountEditInputForm>({
    resolver: yupResolver(AccountEditSchema),
    mode: 'onSubmit',
  })

  const [myJob, setMyJob] = useState('')
  const [isEdited, setIsEdited] = useState(false)

  const onChangeInputEdited = useCallback(() => {
    setIsEdited(true)
  }, [])
  const onChangeInputNotEdited = useCallback(
    (event: ChangeEvent<HTMLInputElement>, defaultData: any) => {
      const { value: InputData } = event.target

      if (defaultData === InputData) {
        setIsEdited(false)
      }
    },
    [],
  )

  const onChangeFileUrl = useCallback((fileUrl: string, index: number) => {
    console.log(fileUrl)
  }, [])

  const [pictureFile, setPictureFile] = useState<(File | string)[]>([''])

  const [uploadFile] = useMutation<
    Pick<TMutation, 'uploadFile'>,
    TMutationUploadFileArgs
  >(UPLOAD_FILE)

  const onChangeFile = useCallback((file: File) => {
    setPictureFile(
      produce(draft => {
        draft[0] = file
      }),
    )
    onChangeInputEdited()
  }, [])

  // 프로필 이미지 버튼
  const fileUploadRef = useRef<HTMLInputElement>(null)

  const onClickUploadButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    fileUploadRef.current?.click()
  }

  const onChangeKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // 엔터 쳐도 onBlur 속성 실행시킴
    if (event.key === 'Enter') {
      event.preventDefault() // onSubmit 막음
      event.currentTarget.blur()
    }
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

    let fileBeforeUpload = pictureFile
      .filter(file => file !== null)
      .filter(file => typeof file !== 'string')
    let fileAfterUpload: string[] = []

    try {
      await uploadFile({
        variables: {
          files: fileBeforeUpload,
        },
      })
        .then(res => res.data?.uploadFile)
        .then(url => {
          fileAfterUpload = pictureFile
            .filter(file => file !== null)
            .filter(file => typeof file === 'string') as string[]
          fileAfterUpload = [...fileAfterUpload, ...(url as string[])]
        })
        .then(() => {
          const updateUserInput: UpdateUserInput = {
            intro: data.intro,
            snsAccount: data.snsAccounts.map(sns => sns.link) ?? [],
          }

          if (fileAfterUpload[0]) {
            updateUserInput.picture = fileAfterUpload[0]
          }

          const currentMyJob = myUserInfo?.jobGroup
          const updateUserMyJob = myJob
          if (currentMyJob !== updateUserMyJob) {
            updateUserInput.jobGroup = updateUserMyJob
          }

          const currentUserNickName = myUserInfo?.nickName
          const updateUserNickName = data.nickName
          if (currentUserNickName !== updateUserNickName) {
            updateUserInput.nickName = updateUserNickName
          }

          return updateUser({
            variables: { updateUserInput },
          })
        })
      router.back()
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: '에러',
          description: error.message,
          status: 'error',
          position: 'top',
        })
      }
      return
    }
  }
  return (
    <AccountEditUI
      myUserInfo={myUserInfo}
      fileUploadRef={fileUploadRef}
      EditableControls={EditableControls}
      onChangeFileUrl={onChangeFileUrl}
      onChangeFile={onChangeFile}
      onClickUploadButton={onClickUploadButton}
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      myJob={myJob}
      setMyJob={setMyJob}
      isEdited={isEdited}
      onChangeInputEdited={onChangeInputEdited}
      onChangeInputNotEdited={onChangeInputNotEdited}
      onChangeKeyDown={onChangeKeyDown}
    />
  )
}

import {
  TMutation,
  TMutationCreateBoardArgs,
  TMutationUploadFileArgs,
} from '@/src/commons/types/generated/types'
import { useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import { produce } from 'immer'
import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import BoardsRegisterUI from './Register.presenter'
import { CREATE_BOARD } from './Register.queries'
import {
  BoardsRegisterInputForm,
  BoardsRegisterProps,
  boardsRegisterSchema,
} from './Register.types'
import { useToast } from '@chakra-ui/react'
import { UPLOAD_FILE } from '@/src/components/ui/fileUpload/quries'

export default function BoardsRegister(props: BoardsRegisterProps) {
  const [files, setFiles] = useState<(File | null)[]>([null, null, null, null, null])
  const useFormReturn = useForm<BoardsRegisterInputForm>({
    resolver: yupResolver(boardsRegisterSchema),
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      deskIntroduce: '',
    },
  })

  const toast = useToast()

  useEffect(() => {
    console.log('##########', files)
  }, [files])

  const [createBoard] = useMutation<
    Pick<TMutation, 'createBoard'>,
    TMutationCreateBoardArgs
  >(CREATE_BOARD)

  const [uploadFile] = useMutation<
    Pick<TMutation, 'uploadFile'>,
    TMutationUploadFileArgs
  >(UPLOAD_FILE)

  const onChangeFile = useCallback((file: File, index: number) => {
    console.log(index)
    setFiles(
      produce(draft => {
        draft[index] = file
      }),
    )
  }, [])

  const onChangeFileUrl = useCallback((fileUrl: string, index: number) => {
    // TODO: 파일 업로드 진행 해야됨 (아직 API 안나옴).
    console.log(fileUrl)
  }, [])

  const onClickSubmit = useCallback(async (data: BoardsRegisterInputForm) => {
    // TODO: Body 데이터 검증까지 성공, Token 실어서 테스트 해봐야됨
    console.log(data)
    // 대표사진
    console.log(files)
    if (!files[0]?.size) {
      toast({ title: '에러', description: '대표사진을 등록해주세요.', status: 'error' })
      return
    }

    if (!data.title && !data.deskIntroduce && !data.usingItems) {
      toast({ title: '에러', description: '정보를 입력해주세요.', status: 'error' })
      return
    }

    await uploadFile({
      variables: {
        files: files.filter(file => file !== null),
      },
    })
      .then(res => res.data?.uploadFile)
      .then(files => {
        return createBoard({
          variables: {
            createBoardInput: {
              title: data.title ?? '',
              description: data.deskIntroduce ?? '',
              createProductInputs: data.usingItems.map(item => {
                return { name: item.name, url: item.link }
              }),
              recommend: data.deskRecommendItem,
              hashtags: data.hashTag ?? [],
              uploadFile: files ?? [],
            },
          },
        })
      })
      .catch(error => {
        if (error instanceof Error) {
          toast({ title: '에러', description: `${error.message}`, status: 'error' })
        }
      })
  }, [])

  return (
    <BoardsRegisterUI
      isEdit={props.isEdit}
      onChangeFile={onChangeFile}
      onChangeFileUrl={onChangeFileUrl}
      useForm={useFormReturn}
      onClickSubmit={onClickSubmit}
    />
  )
}

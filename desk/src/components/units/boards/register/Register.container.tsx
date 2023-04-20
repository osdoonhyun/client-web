import { TMutation, TMutationCreateBoardArgs } from '@/src/commons/types/generated/types'
import { useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import BoardsRegisterUI from './Register.presenter'
import { CREATE_BOARD } from './Register.queries'
import {
  BoardsRegisterInputForm,
  BoardsRegisterProps,
  boardsRegisterSchema,
} from './Register.types'

export default function BoardsRegister(props: BoardsRegisterProps) {
  const useFormReturn = useForm<BoardsRegisterInputForm>({
    resolver: yupResolver(boardsRegisterSchema),
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      deskIntroduce: '',
    },
  })

  const [createBoard] = useMutation<
    Pick<TMutation, 'createBoard'>,
    TMutationCreateBoardArgs
  >(CREATE_BOARD)

  const onChangeFileUrls = useCallback((fileUrl: string, index: number) => {
    // TODO: 파일 업로드 진행 해야됨 (아직 API 안나옴).
    console.log(fileUrl)
  }, [])

  const onClickSubmit = useCallback(async (data: BoardsRegisterInputForm) => {
    // TODO: Body 데이터 검증까지 성공, Token 실어서 테스트 해봐야됨
    console.log(data)
    if (!data.title && !data.deskIntroduce && !data.usingItems) {
      return
    }

    try {
      await createBoard({
        variables: {
          createBoardInput: {
            title: data.title ?? '',
            description: data.deskIntroduce ?? '',
            createProductInputs: data.usingItems.map(item => {
              return { name: item.name, url: item.link }
            }),
            recommend: data.deskRecommendItem,
            hashtags: data.hashTag ?? [],
          },
        },
      })
    } catch (error) {
      // TODO: 에러 처리 진행해야됨.
      console.log(error)
    }
  }, [])

  return (
    <BoardsRegisterUI
      isEdit={props.isEdit}
      onChangeFileUrls={onChangeFileUrls}
      useForm={useFormReturn}
      onClickSubmit={onClickSubmit}
    />
  )
}

import {
  TMutation,
  TMutationCreateBoardArgs,
  TMutationUpdateBoardArgs,
  TMutationUploadFileArgs,
} from '@/src/commons/types/generated/types'
import { UPLOAD_FILE } from '@/src/components/ui/fileUpload/quries'
import { useMutation } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { produce } from 'immer'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import BoardsRegisterUI from './Register.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './Register.queries'
import {
  BoardsRegisterInputForm,
  BoardsRegisterProps,
  boardsRegisterSchema,
} from './Register.types'

export default function BoardsRegister(props: BoardsRegisterProps) {
  const router = useRouter()
  const toast = useToast()
  const boardData = props.boardData?.fetchBoard
  const [isLoading, setIsLoading] = useState(false)
  const [files, setFiles] = useState<(File | string | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ])
  const useFormReturn = useForm<BoardsRegisterInputForm>({
    resolver: yupResolver(boardsRegisterSchema),
    mode: 'onSubmit',
    defaultValues: {
      title: boardData?.title ?? '',
      deskIntroduce: boardData?.description ?? '',
      deskRecommendItem: boardData?.recommend ?? '',
    },
  })

  const [uploadFile] = useMutation<
    Pick<TMutation, 'uploadFile'>,
    TMutationUploadFileArgs
  >(UPLOAD_FILE)

  const [createBoard] = useMutation<
    Pick<TMutation, 'createBoard'>,
    TMutationCreateBoardArgs
  >(CREATE_BOARD)

  const [updateBoard] = useMutation<
    Pick<TMutation, 'updateBoard'>,
    TMutationUpdateBoardArgs
  >(UPDATE_BOARD)

  useEffect(() => {
    if (props.isEdit) {
      initFilesWhenIsEdit()
    }
  }, [])

  const initFilesWhenIsEdit = () => {
    boardData?.pictures.forEach((picture, index) => (files[index] = picture.url))
  }

  const onChangeFile = useCallback((file: File, index: number) => {
    setFiles(
      produce(draft => {
        draft[index] = file
      }),
    )
  }, [])

  const onClickSubmit = async (data: BoardsRegisterInputForm) => {
    console.log(data)

    if (props.isEdit) {
      updateBoardSubmit(data)
    } else {
      createBoardSubmit(data)
    }
  }

  const createBoardSubmit = async (data: BoardsRegisterInputForm) => {
    // 대표사진

    if (!files[0]) {
      toast({
        title: '에러',
        description: '대표사진을 등록해주세요.',
        status: 'error',
        position: 'top',
      })
      return
    }

    // 필수
    if (!data.title && !data.deskIntroduce && !data.usingItems) {
      toast({
        title: '에러',
        description: '정보를 입력해주세요.',
        status: 'error',
        position: 'top',
      })
      return
    }

    setIsLoading(true)

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
                return {
                  name: item.name,
                  url: item.og.url,
                  imageUrl: item.og.imageUrl,
                  description: item.og.description,
                }
              }),
              recommend: data.deskRecommendItem,
              hashtags: data.hashTag ?? [],
              uploadFile: files ?? [],
            },
          },
        })
      })
      .then(() => router.push('/'))
      .catch(error => {
        if (error instanceof Error) {
          toast({ title: '에러', description: `${error.message}`, status: 'error' })
        }
      })
      .finally(() => {
        setIsLoading(false)
      })

    // 테스트용 사용됨.
    // onClickTestSubmit(data)
  }

  const updateBoardSubmit = async (data: BoardsRegisterInputForm) => {
    setIsLoading(true)

    let filesBeforeUpload = files
      .filter(file => file !== null)
      .filter(file => typeof file !== 'string')
    let filesAfterUpload: string[] = []

    await uploadFile({ variables: { files: filesBeforeUpload } })
      .then(res => res.data?.uploadFile)
      .then(urls => {
        filesAfterUpload = files
          .filter(file => file !== null)
          .filter(file => typeof file === 'string') as string[]
        filesAfterUpload = [...filesAfterUpload, ...(urls as string[])]

        setFiles(filesAfterUpload)
      })
      .then(() => {
        return updateBoard({
          variables: {
            boardid: boardData?.id ?? '',
            updateBoardInput: {
              title: data.title ?? '',
              description: data.deskIntroduce ?? '',
              recommend: data.deskRecommendItem,
              hashtags: data.hashTag ?? [],
              uploadFile: filesAfterUpload,
              updateProductInputs: data.usingItems.map(item => {
                return {
                  name: item.name,
                  url: item.og.url,
                  imageUrl: item.og.imageUrl,
                  description: item.og.description,
                }
              }),
            },
          },
        })
      })
      .then(() => router.push(`/boards/${boardData?.id}`))
      .catch(error => {
        if (error instanceof Error) {
          toast({ title: '에러', description: `${error.message}`, status: 'error' })
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const onClickTestSubmit = async (data: BoardsRegisterInputForm) => {
    setIsLoading(true)

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
              title: 'Flynn - Backend Developer',
              description:
                '숨고라는 서비스의 파이썬 백엔드 엔지니어로 근무하고 있습니다. 하지만 언제나 다른 언어와 다른 스택을 하고 싶어서 여기저기 기웃거리고 있어요. 요즘은 저만의 키보드를 만드는 취미에 빠져 노마드코더 슬랙에서 키보드 이야기를 많이 하고 있습니다. 키보드를 비롯한 여러 가지 개발 장비들에 대한 사진은 인스타그램(@flynnpark.dev)에 올리고 있으니 구경하러 많이 와주세요!',
              createProductInputs: [
                {
                  name: '로지텍 K380 멀티 디바이스 블루투스 키보드',
                  url: 'https://www.coupang.com/vp/products/6787604248?itemId=15982200668&vendorItemId=83188133487&pickType=COU_PICK&q=%EB%A1%9C%EC%A7%80%ED%85%8D+%ED%82%A4%EB%B3%B4%EB%93%9C&itemsCount=36&searchId=3c669da68299454eba99dbbb3e4f2765&rank=1&isAddedCart=',
                },
                {
                  name: '로지텍 MX MASTER 3S 무소음 무선 마우스',
                  url: 'https://www.coupang.com/vp/products/6945534310?itemId=16856471871&vendorItemId=84035344516&q=%EB%A1%9C%EC%A7%80%ED%85%8D+%EB%A7%88%EC%9A%B0%EC%8A%A4&itemsCount=36&searchId=362d6c1c502d4c85bea8c1ac1cdccf43&rank=1&isAddedCart=',
                },
              ],
              recommend:
                '더 추천하고 싶은 아이템이 있다면? 다른 건 둘째 치더라도 모니터를 쓴다면 모니터암은 꼭 추천하고 싶습니다. 모니터암을 사용하게 되면서 책상 위 공간이 엄청나게 자유로워지기도 하구요. 높이 안 맞는 모니터 때문에 목이 아플 일도 많이 줄어듭니다. 가장 오래 쓰고 있는 제품군 중 하나입니다.  그리고 맥북으로 듀얼모니터와 주변기기를 사용하시는 분이라면 Thunderbolt Dock 제품군을 사용해보시라고 권장드리고 싶어요. 저는 지금 사용하고 있는 대부분의 자리에 한 대씩 놔뒀는데, 케이블 하나만 맥북에 꽂으면 세팅이 끝나니 엄청 편합니다. 이번에 책상을 모션 데스크로 주문을 넣어 놨는데, 얼른 도착하면 좋겠어요.',
              hashtags: ['IT 개발자', '데스크셋업', '프론트엔드 개발자'],
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
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <BoardsRegisterUI
      isEdit={props.isEdit}
      boardData={props.boardData}
      isLoading={isLoading}
      onChangeFile={onChangeFile}
      useForm={useFormReturn}
      onClickSubmit={onClickSubmit}
    />
  )
}

import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import BoardsRegisterUI from './Register.presenter'
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

  const onChangeFileUrls = useCallback((fileUrl: string, index: number) => {
    console.log(fileUrl)
  }, [])

  const onClickSubmit = useCallback((data: BoardsRegisterInputForm) => {
    console.log(data)
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

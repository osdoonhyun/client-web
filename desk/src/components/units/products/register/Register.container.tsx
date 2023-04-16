import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import ProductRegisterUI from './Register.presenter'
import {
  ProductRegisterInputForm,
  ProductRegisterProps,
  productRegisterSchema,
} from './Register.types'

export default function ProductRegister(props: ProductRegisterProps) {
  const useFormReturn = useForm<ProductRegisterInputForm>({
    resolver: yupResolver(productRegisterSchema),
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      deskIntroduce: '',
    },
  })

  const onChangeFileUrls = useCallback((fileUrl: string, index: number) => {
    console.log(fileUrl)
  }, [])

  const onClickSubmit = useCallback((data: ProductRegisterInputForm) => {
    console.log(data)
  }, [])

  return (
    <ProductRegisterUI
      isEdit={props.isEdit}
      onChangeFileUrls={onChangeFileUrls}
      useForm={useFormReturn}
      onClickSubmit={onClickSubmit}
    />
  )
}

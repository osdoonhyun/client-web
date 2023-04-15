import ProductRegisterUI from './Register.presenter'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { ProductRegisterInputForm } from './Register.types'

export default function ProductRegister() {
  const useFormReturn = useForm<ProductRegisterInputForm>({
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
      onChangeFileUrls={onChangeFileUrls}
      useForm={useFormReturn}
      onClickSubmit={onClickSubmit}
    />
  )
}

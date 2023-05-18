import { UseFormReturn } from 'react-hook-form'
import { AccountEditInputForm } from '../../AccountEdit.types'
import { ChangeEvent } from 'react'

export type SnsAccountsType = {
  id: string
  sns: string
}

export type SnsAccountEditProps = {
  snsAccounts: SnsAccountsType[]
  register: UseFormReturn<AccountEditInputForm, any>['register']
  onChangeInputEdited: () => void
  onChangeInputNotEdited: (event: ChangeEvent<HTMLInputElement>, defaultData: any) => void
  onChangeKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

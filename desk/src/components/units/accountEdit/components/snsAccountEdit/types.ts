import { UseFormReturn } from 'react-hook-form'
import { AccountEditInputForm } from '../../AccountEdit.types'

export type SnsAccountsType = {
  id: string
  sns: string
}

export type SnsAccountEditProps = {
  snsAccounts: SnsAccountsType[]
  register: UseFormReturn<AccountEditInputForm, any>['register']
}

import { Select } from '@chakra-ui/react'
import { MyJob } from '@/src/components/units/auth/Auth.types'
import { ChangeEvent, useEffect, useState } from 'react'
import { JOB_LIST } from '@/src/commons/utils/util'

export default function MyJobSelect(props: MyJob) {
  const [textColor, setTextColor] = useState('red.200')

  useEffect(() => {
    if (!props.myJob) {
      setTextColor('dPrimary')
    }
  }, [props.myJob])

  useEffect(() => {
    if (defaultValue) {
      props.setMyJob(selectedMyJob?.shortName || '')
    }
  }, [])

  const onChangeMySelectJob = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value: shortName } = e.target
    props.setMyJob(shortName)
    setTextColor('')
    if (shortName !== props.myJob) {
      props.onChangeInputEdited()
    }
  }

  const selectedMyJob = JOB_LIST.find(job => job.shortName === props.myJob)
  const defaultValue = selectedMyJob?.shortName ? selectedMyJob?.fullName : ''

  return (
    <>
      <Select
        focusBorderColor={'dPrimary'}
        color={textColor}
        value={props.myJob || defaultValue}
        placeholder="직군을 선택해 주세요 *"
        onChange={onChangeMySelectJob}
        isRequired>
        {JOB_LIST.map((el, index) => (
          <option key={index} value={el.shortName}>
            {el.fullName}
          </option>
        ))}
      </Select>
    </>
  )
}

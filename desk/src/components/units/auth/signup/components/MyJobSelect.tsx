import { Select } from '@chakra-ui/react'
import { MyJob } from '@/src/components/units/auth/Auth.types'
import { ChangeEvent, useEffect, useState } from 'react'

const JOB_LIST = [
  { shortName: 'IT', fullName: 'IT' },
  { shortName: '마케팅', fullName: '마케팅/광고' },
  { shortName: '디자인', fullName: '디자인' },
  { shortName: '미디어', fullName: '미디어/엔터테인먼트' },
  { shortName: '교육', fullName: '교육' },
  { shortName: '학생', fullName: '학생' },
  { shortName: '기타', fullName: '기타' },
]

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

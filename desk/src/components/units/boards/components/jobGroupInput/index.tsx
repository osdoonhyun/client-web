import { HStack, Input, Select, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { JobGroupInputProps, JobGroupItemType } from './types'
import { Select as SelectTags } from 'antd'

const EX_JOB_ITEMS = [
  {
    group: 'IT',
    detail: '소프트웨어 엔지니어, 웹 개발자, 데이터 분석가, 보안 전문가 등',
  },
  { group: '마케팅/광고', detail: '마케팅 전문가, 광고 기획자, PR 전문가 등' },
  { group: '디자인', detail: '그래픽 디자이너, 산업 디자이너, 웹 디자이너 등' },
  { group: '미디어/엔터테인먼트', detail: '방송인, 작가, PD, 기자 등' },
  { group: '교육', detail: '교사, 학생, 학원강사, 교육컨설턴트 등' },
  { group: '기타', detail: '' },
]

export default function JobGroupInput(props: JobGroupInputProps) {
  const [jobItem, setJobItem] = useState<JobGroupItemType>({
    group: '',
    detail: undefined,
  })
  const [jobDetailPlaceholder, setJobDetailPlaceholder] = useState(
    'ex) 프론트엔드 개발자, 교수, 고등학생 ...',
  )

  useEffect(() => {
    props.onItem(jobItem)
  }, [jobItem])

  const onChangeJobGroup = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value: group } = event.target
    setJobItem(item => ({ ...item, group }))
    setJobDetailPlaceholder(placeholderOfJobGroup(group))
  }
  const onChangeJobDetail = (detail: string) => {
    setJobItem(item => ({ ...item, detail: detail?.[0] }))
  }

  const placeholderOfJobGroup = (group: string) => {
    return EX_JOB_ITEMS.filter(item => item.group === group)[0]?.detail
  }

  return (
    <VStack align={'stretch'}>
      <Text
        fontSize={16}
        fontWeight={700}
        color={useColorModeValue('dGray.dark', 'dGray.medium')}
        mb="px">
        {props.title}
      </Text>
      <HStack align={'stretch'}>
        <Select
          bgColor={'white'}
          color={'black'}
          placeholder="직군"
          width={'36%'}
          onChange={onChangeJobGroup}
          _placeholder={{ color: 'dGray.medium' }}>
          {EX_JOB_ITEMS.map((item, index) => (
            <option key={index} value={item.group}>
              {item.group}
            </option>
          ))}
        </Select>
        <SelectTags
          mode="tags"
          style={{ width: '100%' }}
          size="large"
          value={jobItem.detail}
          placeholder={jobDetailPlaceholder}
          maxTagCount={1}
          onChange={onChangeJobDetail}
          options={props.options}
        />
      </HStack>
    </VStack>
  )
}

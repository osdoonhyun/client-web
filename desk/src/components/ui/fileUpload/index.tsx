import { UploadOutlined } from '@ant-design/icons'
import { Avatar, Center, Image, Input } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { FileUploadProps } from './types'

const EMPTY_PROFILE_URL = 'https://bit.ly/broken-link'

export default function FileUpload(props: FileUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(props.fileUrl)

  useEffect(() => {
    setImageUrl(props.fileUrl)
  }, [])

  const onClickUpload = () => {
    fileRef.current?.click()
  }

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    setFakeImageURL(file)
  }

  const setFakeImageURL = (file: File) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = data => {
      const url = data.target?.result
      if (typeof url === 'string') {
        setImageUrl(url)
        props.onChangeFileUrls(url, props.index ?? 0)
      }
    }
  }

  return (
    <>
      {props.type === 'file' ? ( // File Type
        imageUrl ? (
          <Image
            src={imageUrl ?? ''}
            width={props.width}
            height={props.width}
            objectFit="cover"
            cursor={'pointer'}
            onClick={onClickUpload}
          />
        ) : (
          <Center
            w={props.width}
            h={props.height}
            bgColor="dGray.light"
            boxShadow="base"
            cursor={'pointer'}
            onClick={onClickUpload}>
            <UploadOutlined style={{ fontSize: 30 }} />
          </Center>
        )
      ) : imageUrl ? ( // Profile Type
        <Image
          src={imageUrl ?? EMPTY_PROFILE_URL}
          width={props.width}
          height={props.width}
          objectFit="cover"
          borderRadius="full"
          cursor={'pointer'}
          onClick={onClickUpload}
        />
      ) : (
        <Avatar
          src={EMPTY_PROFILE_URL}
          width={props.width}
          height={props.height}
          onClick={onClickUpload}
          cursor={'pointer'}
          borderRadius="full"
        />
      )}

      <Input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        ref={fileRef}
        display={'none'}
        onChange={onChangeFile}
      />
    </>
  )
}

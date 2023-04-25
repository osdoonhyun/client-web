import { Avatar, Center, Image, Input, useColorModeValue } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { AiOutlineUpload } from 'react-icons/ai'
import { FileUploadProps } from './types'

const EMPTY_PROFILE_URL = 'https://bit.ly/broken-link'

export default function FileUpload(props: FileUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(props.fileUrl)
  const [fileData, setFileData] = useState<File>()

  useEffect(() => {
    setImageUrl(props.fileUrl)
  }, [])

  useEffect(() => {
    if (fileData) {
      props.onChangeFile(fileData, props.index ?? 0)
    }
  }, [fileData])

  const onClickUpload = () => {
    fileRef.current?.click()
  }

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    setFileData(file)
    setFakeImageURL(file)
  }

  const setFakeImageURL = async (file: File) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = data => {
      const url = data.target?.result
      if (typeof url === 'string') {
        setImageUrl(url)
        props.onChangeFileUrl(url, props.index ?? 0)
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
            height={props.height}
            borderRadius={'10px'}
            objectFit="cover"
            cursor={'pointer'}
            onClick={onClickUpload}
          />
        ) : (
          <Center
            w={props.width}
            h={props.height}
            bgColor={useColorModeValue('dGray.light', '#bababa1e')}
            boxShadow="base"
            borderRadius={'10px'}
            border="solid 1px"
            borderColor={useColorModeValue('dGray.light', '#bababa89')}
            cursor={'pointer'}
            onClick={onClickUpload}>
            <AiOutlineUpload
              fontSize={30}
              color={useColorModeValue('dGray.medium', 'dGray.light')}
            />
          </Center>
        )
      ) : imageUrl ? ( // Profile Type
        <Image
          src={imageUrl ?? EMPTY_PROFILE_URL}
          width={props.width}
          height={props.height}
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
        hidden={true}
        onChange={onChangeFile}
      />
      {props.children}
    </>
  )
}

export type ProfileCardProps = {
  image?: string | null
  nickName: string
  followeesCount: number
  followingsCount: number
  jobGroup: string
  onClick?: () => void
}

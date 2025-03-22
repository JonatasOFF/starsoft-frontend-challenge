import { ReactNode } from 'react'

export type ButtonProps = Partial<{
  children: ReactNode
  $themebtn: 'primary' | 'secondary'
  $size: 'sm' | 'md'
  onClick: () => void
}> &
  LoadingButtonStyleProps

export type LoadingButtonStyleProps = {
  loading?: boolean
  $progress?: number
}

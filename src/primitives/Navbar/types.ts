import { ReactNode } from 'react'

export type NavbarProps = {
  children?: ReactNode
} & NavbarStyleProps

export type NavbarStyleProps = {
  open?: boolean
  className?: string
}

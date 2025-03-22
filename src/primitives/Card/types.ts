import { ReactNode } from 'react'

export type CardProps = {
  children?: ReactNode
  className?: string
}

export type PriceProps = {
  price?: number
  className?: string
}

export type ContentProps = {
  name?: string
  description?: string
}

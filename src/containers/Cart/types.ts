import { GetProductsAPI } from '@/models'

export type ListProducts = GetProductsAPI['data'][number][] &
  { quantity: number }[]

export type CartProps = {
  open?: boolean
  list?: ListProducts
  total?: number
  onClose?: () => void
  onRemove: (id?: number) => void
  onIncrement: (id?: number) => void
  onDecrement: (id?: number) => void
}

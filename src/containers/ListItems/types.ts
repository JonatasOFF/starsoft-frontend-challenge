import { ReactNode } from 'react'
import { ListProducts } from '../Cart/types'
import { GetProductsAPI, Product } from '@/models'

export type ListItemsProps = {
  list?: GetProductsAPI['data']
  onBuy?: (product: Product) => void;
  onDetail?: (product: Product) => void;
}

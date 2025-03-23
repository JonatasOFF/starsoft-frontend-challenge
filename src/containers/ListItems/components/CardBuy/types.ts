export type CardBuyProps = Partial<{
  name: string
  image: string
  description: string
  price: number
  onBuy: () => void
  onDetail: () => void
  
}>

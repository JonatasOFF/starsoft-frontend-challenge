export type CardCartProps = Partial<{
  name: string
  image: string
  description: string
  price: number
  quantity: number
  onRemove: () => void
  onDecrement?: () => void
  onIncrement?: () => void
}>

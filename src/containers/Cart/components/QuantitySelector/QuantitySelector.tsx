import * as S from './styles'
import { QuantitySelectorProps } from './types'

export function QuantitySelector({
  count,
  onIncrement,
  onDecrement,
}: QuantitySelectorProps) {
  return (
    <S.Container>
      <S.ButtonsCount onClick={() => onDecrement?.()}>-</S.ButtonsCount>
      <S.Count>{count}</S.Count>
      <S.ButtonsCount onClick={() => onIncrement?.()}>+</S.ButtonsCount>
    </S.Container>
  )
}

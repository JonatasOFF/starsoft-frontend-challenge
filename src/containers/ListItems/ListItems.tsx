import { CardBuy } from './components'
import * as S from './styles'
import { ListItemsProps } from './types'

export function ListItems({ list = [], onBuy }: ListItemsProps) {
  return (
    <S.Container>
      {list
        .filter(({ name }) => !!name)
        .map((product) => (
          <CardBuy
            key={product.id}
            {...product}
            onBuy={() => onBuy?.(product)}
          />
        ))}
    </S.Container>
  )
}

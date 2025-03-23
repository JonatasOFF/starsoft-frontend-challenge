import { CardBuy } from './components'
import * as S from './styles'
import { ListItemsProps } from './types'

export function ListItems({ list = [], onBuy, onDetail }: ListItemsProps) {
  return (
    <S.Container>
      {list
        .map((product) => (
          <CardBuy
            key={`${product.name}-buy`}
            {...product}
            onBuy={() => onBuy?.(product)}
            onDetail={() => onDetail?.(product)}
          />
        ))}
    </S.Container>
  )
}

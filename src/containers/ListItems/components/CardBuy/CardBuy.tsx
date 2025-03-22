import { Button } from '@/components'
import * as S from './styles'
import { CardBuyProps } from './types'
import Image from 'next/image'
import { Content, Price } from '@/primitives'

export function CardBuy({
  name,
  description,
  price,
  image,
  onBuy,
}: CardBuyProps) {
  return (
    <S.Container>
      {image && <Image src={image} fill sizes="200" alt="Image" priority />}
      <S.Content>
        <Content name={name} description={description} />
        <Price price={price} />
        <Button $size="sm" onClick={onBuy}>
          COMPRAR
        </Button>
      </S.Content>
    </S.Container>
  )
}

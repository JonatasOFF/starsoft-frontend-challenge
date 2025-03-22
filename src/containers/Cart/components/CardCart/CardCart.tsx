import { Content, Price } from '@/primitives'
import Image from 'next/image'
import { QuantitySelector } from '../QuantitySelector'
import * as S from './styles'
import { CardCartProps } from './types'
import { AiOutlineDelete } from 'react-icons/ai'

export function CardCart({
  name,
  description,
  price,
  image,
  quantity,
  onRemove,
  onIncrement,
  onDecrement,
}: CardCartProps) {
  return (
    <S.Container>
      {image && <Image src={image} fill alt="Image" />}
      <S.Content>
        <Content name={name} description={description} />
        <S.PriceCart price={price} />
        <S.FooterCard>
          <QuantitySelector
            count={quantity}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />

          <S.Delete onClick={onRemove}>
            <AiOutlineDelete size={20} />
          </S.Delete>
        </S.FooterCard>
      </S.Content>
    </S.Container>
  )
}

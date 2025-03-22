import * as S from './styles'
import { CardProps, ContentProps, PriceProps } from './types'
import Image from 'next/image'

export function Card({ children, ...styledProps }: CardProps) {
  return <S.Container {...styledProps}>{children}</S.Container>
}

export function Price({ price, ...styledProps }: PriceProps) {
  return (
    <S.Price {...styledProps}>
      <Image src={'/eth.png'} width={35} height={35} alt={'ETH'} />
      {price} ETH
    </S.Price>
  )
}

export function Content({ name, description }: ContentProps) {
  return (
    <>
      <S.Name>{name}</S.Name>
      <S.Description title={description}>{description}</S.Description>
    </>
  )
}

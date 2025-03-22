import * as S from './styles'
import Image from 'next/image'
import { CardStatusProps } from './types'

export function CardStatus({ count, onClick }: CardStatusProps) {
  return (
    <S.Container onClick={onClick}>
      <Image src="/bag.svg" width={32} height={32} alt="bag" />
      <S.Count>{count}</S.Count>
    </S.Container>
  )
}

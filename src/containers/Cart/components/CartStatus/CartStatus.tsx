import * as S from './styles'
import Image from 'next/image'
import * as motion from 'motion/react-client'
import { CardStatusProps } from './types'

export function CardStatus({ count, onClick }: CardStatusProps) {
  return (
    <S.Container onClick={onClick}>
      <Image src="/bag.svg" width={32} height={32} alt="bag" />
      <S.Count
        key={count}
        as={motion.div}
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 1.5, opacity: 1 }}
        exit={{ scale: 1, opacity: 0.5 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        {count}
      </S.Count>
    </S.Container>
  )
}

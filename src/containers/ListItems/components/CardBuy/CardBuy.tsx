import { Button } from '@/components'
import * as S from './styles'
import * as motion from 'motion/react-client'
import { CardBuyProps } from './types'
import Image from 'next/image'
import { Content, Price } from '@/primitives'

export function CardBuy({
  name,
  description,
  price,
  image,
  onBuy,
  onDetail,
}: CardBuyProps) {
  return (
    <S.Container
      as={motion.div}
      whileHover={{
        scale: 1.05,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
    >
      {image && (
        <motion.div
          style={{
            cursor: 'pointer'
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => onDetail?.()}
        >
          {' '}
          <Image src={image} width={210} height={150} alt="Image" priority />
        </motion.div>
      )}
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

import { Navbar } from '@/primitives'
import Image from 'next/image'
import { CardCart } from './components'
import * as S from './styles'
import { CartProps } from './types'
import { Button } from '@/components'
import { useState } from 'react'

export function Cart({
  open,
  list = [],
  total = 0,
  onRemove,
  onIncrement,
  onDecrement,
  onClose,
}: CartProps) {
  const [finishBuy, setFinishBuy] = useState<boolean>(false)
  return (
    <Navbar open={open}>
      <S.Container>
        <S.Header>
          <S.CloseNavbar
            onClick={() => {
              setFinishBuy(false)
              onClose?.()
            }}
          >
            <Image src={'/arrow-left.svg'} width={48} height={48} alt="arrow" />
          </S.CloseNavbar>
          <S.Title>Mochila de Compras</S.Title>
        </S.Header>

        {total === 0 && <S.CartEmpty>Sua mochila está vazia !</S.CartEmpty>}
        {total !== 0 && (
          <>
            <S.List>
              {list
                .map((product) => (
                  <CardCart
                    key={`${product.id}-cart`}
                    {...product}
                    onRemove={() => onRemove?.(product.id)}
                    onIncrement={() => onIncrement?.(product.id)}
                    onDecrement={() => onDecrement?.(product.id)}
                  />
                ))}
            </S.List>
            <S.Total>
              <p>Total </p>
              <S.PriceTotal price={total} />
            </S.Total>
            <Button $themebtn="primary" onClick={() => setFinishBuy(true)}>
              {!finishBuy && 'FINALIZAR COMPRA'}
              {!!finishBuy && 'COMPRA FINALIZADA'}
            </Button>
          </>
        )}
      </S.Container>
    </Navbar>
  )
}

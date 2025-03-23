'use client'
import { RootState } from '@/common/lib/redux/store'
import { Button } from '@/components'
import { Cart, ListItems } from '@/containers'
import { CardStatus } from '@/containers/Cart/components'
import { LayoutBase } from '@/layout'
import { AiOutlineLoading } from 'react-icons/ai'
import { GetProductsAPI } from '@/models'
import { getProducts } from '@/services/getProducts'
import {
  addMetadata,
  addProducts,
  addToCart,
  addToDetail,
  decrementQuantity,
  incrementQuantity,
  nextPage,
  removeFromCart,
} from '@/store/slices/productsSlice'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { useRouter } from 'next/navigation';

export function Home() {
  const refContent = useRef<HTMLDivElement>(null)

  const { page, limit, items, metadata, cartItems, total } = useSelector(
    (state: RootState) => state.products
  )

  const router = useRouter();

  const [openCart, setOpenCart] = useState<boolean>(false)

  const dispatch = useDispatch()

  const { data, error, isLoading } = useQuery<GetProductsAPI>({
    queryKey: [
      'items',
      {
        limit,
        page,
      },
    ],
    queryFn: getProducts,
  })

  const progress = useMemo(() => {
    if (metadata.pageCount === 0) return 0

    const max = metadata.pageCount

    return Math.floor((page / max) * 100)
  }, [metadata, page])

  const handleLoadItems = () => {
    if (progress === 100) return
    dispatch(nextPage())
  }

  useEffect(() => {
    if (data?.data) {
      dispatch(addProducts(data.data))
    }

    if (page === 1) {
      const metadata = data?.metadata
      if (!!metadata) dispatch(addMetadata(data?.metadata))
    }
    if (!!refContent.current && page !== 1) {
      refContent.current.scrollTop = refContent.current.scrollHeight
    }
  }, [data, dispatch])

  return (
    <>
      <LayoutBase>
        <S.Container>
          <S.Header>
            <Image
              src={'/logo.png'}
              width={101}
              height={38}
              alt="Logo da empresa"
            />
            <CardStatus
              count={Object.values(cartItems).length}
              onClick={() => setOpenCart((open) => !open)}
            />
          </S.Header>
          <S.Content ref={refContent}>
            {isLoading && !error && (
              <S.Loading>
                <AiOutlineLoading size={128} />
              </S.Loading>
            )}
            {!isLoading && !error && (
              <ListItems
                list={items}
                onBuy={(product) => dispatch(addToCart(product))}
                onDetail={(product) =>  {
                  dispatch(addToDetail(product))
                  router.push('/product')
                }}
              />
            )}
            {error && (
              <S.ErrorMessage>
                Não foi possível carregar a lista de items.
              </S.ErrorMessage>
            )}
          </S.Content>
          <S.LoadMore>
            <Button
              $themebtn="secondary"
              loading
              $progress={progress}
              $size="md"
              onClick={handleLoadItems}
            >
              {progress !== 100 && 'Carregar mais'}
              {progress === 100 && 'Você já viu tudo'}
            </Button>
          </S.LoadMore>
        </S.Container>
        <Cart
          open={openCart}
          total={total}
          list={Object.values(cartItems)}
          onClose={() => setOpenCart((open) => !open)}
          onRemove={(id) => dispatch(removeFromCart(id))}
          onIncrement={(id) => dispatch(incrementQuantity(id))}
          onDecrement={(id) => dispatch(decrementQuantity(id))}
        />
      </LayoutBase>
    </>
  )
}

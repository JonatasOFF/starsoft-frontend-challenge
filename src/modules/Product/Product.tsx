'use client'

import { LayoutBase } from '@/layout'
import { RootState } from '@/common/lib/redux/store'
import * as S from './styles'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function Product() {
  const { productDetail } = useSelector((state: RootState) => state.products)

  const router = useRouter()

  return (
    <LayoutBase>
      <S.Container>
        {productDetail.image && (
          <div>
            <Image
              src={productDetail.image}
              width={210}
              height={150}
              alt="Image"
              priority
            />
          </div>
        )}
        <S.Content>
          <S.Name>{productDetail.name}</S.Name>
          <S.Description>{productDetail.description}</S.Description>
        </S.Content>
      </S.Container>
      <S.GoBack
        onClick={() => {
          router.push('/')
        }}
      >
        <Image src={'/arrow-left.svg'} width={48} height={48} alt="arrow" />
      </S.GoBack>
    </LayoutBase>
  )
}

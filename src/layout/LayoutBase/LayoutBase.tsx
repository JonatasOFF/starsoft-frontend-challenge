import * as S from './styles'
import { LayoutBaseProps } from './types'

export function LayoutBase({ children }: LayoutBaseProps) {
  return <S.Container>{children}</S.Container>
}

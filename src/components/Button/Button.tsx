import * as S from './styles'
import { ButtonProps } from './types'

export function Button({
  children,
  $themebtn = 'primary',
  $progress = 0,
  $size = 'md',
  loading,
  onClick,
}: ButtonProps) {
  return (
    <S.Container $themebtn={$themebtn} $size={$size} onClick={onClick}>
      {loading && <S.Loading $progress={$progress} />}
      {children}
    </S.Container>
  )
}

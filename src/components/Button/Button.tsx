import * as S from './styles'
import { ButtonProps } from './types'
import * as motion from 'motion/react-client'

export function Button({
  children,
  $themebtn = 'primary',
  $progress = 0,
  $size = 'md',
  loading,
  onClick,
}: ButtonProps) {
  return ( 
    <motion.div
      style={{
        width: '100%',
        
      }}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <S.Container $themebtn={$themebtn} $size={$size} onClick={onClick}>
        {loading && <S.Loading $progress={$progress} />}
        {children}
      </S.Container>
    </motion.div>
  )
}

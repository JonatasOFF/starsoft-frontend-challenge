import { colors, font } from '@/common/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
`

export const Count = styled.div`
  font-size: ${font.sizes.heading05};
  color: ${colors.white1};
`

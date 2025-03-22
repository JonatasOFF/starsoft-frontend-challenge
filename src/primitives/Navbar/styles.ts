import styled, { css } from 'styled-components'

import { NavbarStyleProps } from './types'
import { colors } from '@/common/styles/theme'

const modifier = {
  open: () => css`
    && {
      right: 0rem;
      box-shadow: -29px 0px 9.8px 0px #0000001a;
    }
  `,
}

export const Container = styled.div<NavbarStyleProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  transition: right 0.5s ease-out;
  width: 49rem;
  background-color: ${colors.black1};
  height: 100%;
  padding: 2.4rem;
  right: -64rem;
  top: 0;
  z-index: 10;

  ${({ open }) => css`
    ${!!open && modifier.open()}
  `}

  @media (max-width: 500px) {
    width: 100vw;
  }
`

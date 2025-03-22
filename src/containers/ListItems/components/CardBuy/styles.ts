'use client'

import { colors, font } from '@/common/styles/theme'
import { Card } from '@/primitives'
import styled from 'styled-components'

export const Container = styled(Card)`
  flex-direction: column;

  height: 38.2rem;
  width: 26.5rem;
  border-radius: 0.8rem;

  background-color: ${colors.black2};
  padding: 2.45rem 2.6rem;
  box-shadow: 0 0.1rem 0.2rem 0 #0000001a;

  > img {
    position: relative !important;
    border-radius: 0.8rem;
    aspect-ratio: 1/1;
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.8rem;
`

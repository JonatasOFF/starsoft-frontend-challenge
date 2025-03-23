'use client'

import { colors, font } from '@/common/styles/theme'
import { Card } from '@/primitives'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const Content = styled(Card)`
  width: 50%;
  flex-direction: column;
`

export const Name = styled.div`
  color: ${colors.white1};
  font-size: ${font.sizes.heading06};
  margin-top: 1.6rem;
`


export const Description = styled.div`
  max-height: 2rem;
  max-width: 100%;
  font-size: 1.2rem;
  font-weight: 300;

  color: ${colors.gray1};
`

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2.4rem;
  left: 2.4rem;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  border-radius: 6.4rem;
  background-color: #373737;

  img {
    width: 4.8rem;
    height: 4.8rem;
    position: relative !important;
  }
`
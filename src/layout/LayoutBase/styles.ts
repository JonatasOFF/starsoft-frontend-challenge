'use client'

import { colors, font } from '@/common/styles/theme'
import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${colors.black1};
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  text-align: center;
  width: 100%;
  height: 7.6rem;
  color: #ffffff70;
  font-size: ${font.sizes.normal};
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`
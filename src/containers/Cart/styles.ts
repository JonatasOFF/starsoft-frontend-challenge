import { color } from 'motion/react'
import { colors, font } from './../../common/styles/theme'
import styled from 'styled-components'
import { Price } from '@/primitives'

export const Container = styled.div``

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
`

export const CloseNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

export const Title = styled.div`
  color: ${colors.white1};
  font-weight: 500;
  font-size: 2.4rem;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1.6rem;
  max-height: calc(100vh - 30rem);
  overflow-y: auto;
  padding-right: 1.6rem;
`

export const PriceTotal = styled(Price)`
  margin-bottom: 0;
`

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;

  p {
    margin-right: auto;
    color: ${colors.white1};
    font-size: ${font.sizes.heading04};
    font-weight: ${font.bold};
    text-align: center;
    text-transform: uppercase;
  }
`

export const CartEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-transform: uppercase;
  color: ${colors.white1};
  font-size: ${font.sizes.heading04};
`

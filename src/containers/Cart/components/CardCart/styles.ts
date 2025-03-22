import { colors } from '@/common/styles/theme'
import { Card, Price } from '@/primitives'
import styled from 'styled-components'

export const Container = styled(Card)`
  flex-direction: row;

  height: 20rem;
  width: 100%;
  border-radius: 0.8rem;

  background-color: ${colors.black2};
  padding: 1.9rem 3rem;
  box-shadow: 0 0.1rem 0.2rem 0 #0000001a;
  gap: 3.2rem;

  > img {
    max-width: 16.1rem;
    max-height: 16.1rem;
  }
`

export const Content = styled.div`
  display: flex;
  width: calc(100% - 19rem);
  flex-direction: column;
  align-items: start;
  height: 100%;
  justify-content: center;
  gap: 0.8rem;

  @media (max-width: 476px) {
    min-width: 17rem;
  }
`

export const PriceCart = styled(Price)`
  margin-bottom: 0.8rem;
`

export const FooterCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  position: relative;
  width: 100%;
  > div {
    &:first-child {
      margin-right: auto;
    }
  }
`

export const Delete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6.4rem;
  width: 4rem;
  height: 4rem;
  background-color: ${colors.orange1};
  padding: 0.8rem;
  transition: background-color 0.3s ease-in;
  cursor: pointer;
  &:hover {
    background-color: #cb670b;
  }

  svg {
    color: white;
    fill: white;
  }
`

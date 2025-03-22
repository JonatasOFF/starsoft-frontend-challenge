import { colors } from '@/common/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 11.5rem;
  height: 3.6rem;
  border-radius: 0.8rem;
  background-color: ${colors.black1};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Count = styled.div`
  font-size: 2rem;
  color: ${colors.white1};
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

export const ButtonsCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in;
  font-size: 2.4rem;
  width: 4.2rem;
  height: 100%;
  color: ${colors.white1};

  &:hover {
    background-color: ${colors.black2};
  }
`

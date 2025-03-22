'use client'

import { colors, font } from '@/common/styles/theme';
import styled, { keyframes } from 'styled-components';

const animationLoading = keyframes`
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
    
  }
`

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1.6rem;
  min-height: 6rem;
  color: ${colors.black1};
  width: 100%;
  border-bottom: 0.1rem solid #ffffff36;
  > :last-child {
    margin-left: auto;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-y: auto;
`

export const LoadMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 40rem;
  margin: auto;
  margin-bottom: 0;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.4rem;
  text-align: center;
  width: 100%;
  height: 7.6rem;
  color: #ffffff70;
  font-size: ${font.sizes.normal};
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`

export const Loading = styled.div`
  display: flex;
  animation: ${animationLoading} 1s infinite;
  align-items: center;
  justify-content: center;
  top: 30%;
  position: absolute;

  svg {
    fill: ${colors.orange1};
  }
`

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 30%;
  position: absolute;
  text-align: center;
  font-size: ${font.sizes.heading01};
  color: white;
`

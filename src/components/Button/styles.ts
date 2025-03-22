'use client'
import { colors, font } from '@/common/styles/theme'
import styled, { css } from 'styled-components'
import { ButtonProps, LoadingButtonStyleProps } from './types'

const modifier = {
  themebtn: {
    primary: () => css`
      color: ${colors.white1};
      background-color: ${colors.orange1};
      font-weight: 700;

      &:hover {
        background-color: #cb670b;
      }
    `,
    secondary: () => css`
      background-color: ${colors.black4};
      color: ${colors.white1};
      font-weight: ${font.bold};
      font-size: ${font.sizes.heading05};
      text-transform: capitalize;

      &:hover {
        background-color: #363535;
      }
    `,
  },
  progress: (progress: number) => css`
    &:before {
      width: ${progress}%;
    }
  `,
  size: {
    sm: () => css`
      padding: 1.6rem;
    `,
    md: () => css`
      padding: 2.4rem;
    `,
  },
}

export const Container = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  position: relative;
  width: 100%;
  transition: background-color 0.3s ease-in;
  border-radius: 0.8rem;
  box-shadow: 0px 5rem 10rem -2rem #32325d40;
  cursor: pointer;

  ${({ $themebtn, $size }) => css`
    ${!!$themebtn && modifier.themebtn[$themebtn]}
    ${!!$size && modifier.size[$size]}
  `}
`

export const Loading = styled.div<LoadingButtonStyleProps>`
  background-color: ${colors.black3};
  height: 1rem;
  border-radius: 0.8rem;
  width: 100%;
  position: absolute;
  z-index: 5;

  top: -2.1rem;

  &:before {
    content: ' ';
    display: flex;
    transition: width 0.2s ease-in;
    border-radius: 0.8rem;
    height: 1rem;
    background-color: ${colors.orange1};
  }

  ${({ $progress }) => css`
    ${!!$progress && modifier.progress($progress)};
  `}
`

import { colors, font } from '@/common/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  position: relative;

  img {
    position: relative !important;
    border-radius: 0.8rem;
  }
`
export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${font.bold};
  color: ${colors.white2};
  font-size: ${font.sizes.heading05};
  margin-bottom: 1.6rem;

  img {
    margin-right: 1rem;
    width: 2.9rem;
    height: 2.9rem;
  }
`
export const Description = styled.div`
  max-height: 2rem;
  max-width: 100%;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 1.2rem;
  font-weight: 300;

  color: ${colors.gray1};
`

export const Image = styled.img`
  margin-bottom: 4.9rem;
  width: 28.9rem;
  height: 25.8rem;
`

export const Name = styled.div`
  color: ${colors.white1};
  font-size: ${font.sizes.heading06};
  margin-top: 1.6rem;
`

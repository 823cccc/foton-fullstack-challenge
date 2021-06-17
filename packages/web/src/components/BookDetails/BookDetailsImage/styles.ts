import styled from 'styled-components'

import { shimmer } from '../styles'

type Props = {
  url: string
}

const Image = styled.div<Props>`
  position: absolute;

  height: 234px;
  width: 151px;
  top: 10.35%;

  box-shadow: 0 8px 6px -6px black;

  background-image: url(${(props) => props.url});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const LoadingImage = styled.div`
  position: absolute;

  height: 234px;
  width: 151px;
  top: 10.35%;

  background: linear-gradient(
    90deg,
    rgba(190, 190, 190, 0.5) 25%,
    rgba(129, 129, 129, 0.54) 37%,
    rgba(190, 190, 190, 0.5) 63%
  );

  background-size: 600% 600%;

  animation: ${shimmer} 1.4s ease infinite;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`

export { LoadingImage, Image, ImageContainer }

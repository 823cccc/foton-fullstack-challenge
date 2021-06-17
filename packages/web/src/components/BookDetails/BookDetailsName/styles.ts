import styled from 'styled-components'

import { shimmer } from '../styles'

const Text = styled.p`
  margin: 30px 0 0 0;
  padding: 0;

  font-style: normal;
  font-weight: 500;
  font-size: 24px;

  line-height: 29px;
  letter-spacing: 1.5px;
`

const LoadingText = styled.div`
  margin: 30px 0 0 0;
  padding: 0;

  height: 24px;

  background: linear-gradient(
    90deg,
    rgba(190, 190, 190, 0.5) 25%,
    rgba(129, 129, 129, 0.54) 37%,
    rgba(190, 190, 190, 0.5) 63%
  );

  background-size: 600% 600%;

  animation: ${shimmer} 1.4s ease infinite;
`

export { Text, LoadingText }

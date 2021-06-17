import styled from 'styled-components'

import { shimmer } from '../styles'

const Text = styled.p`
  margin: 10px 0;
  padding: 0;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #ff6978;
`

const LoadingText = styled.div`
  margin: 10px 0;
  padding: 0;

  height: 16px;

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

import styled from 'styled-components'

import { shimmer } from '../styles'

const Text = styled.p`
  margin: 0;
  padding: 0;

  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.2px;

  text-align: justify;

  // Prevents floater from blocking reading
  padding-bottom: 56px;

  color: rgba(49, 49, 49, 0.6);
`

const LoadingText = styled.div`
  margin: 0;
  padding: 0;

  height: 140px;

  padding-bottom: 56px;

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

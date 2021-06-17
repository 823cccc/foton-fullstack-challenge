import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`

const LoadingImage = styled.div`
  height: 153px;
  width: 100%;

  margin-bottom: 10px;

  background: linear-gradient(
    90deg,
    rgba(190, 190, 190, 0.5) 25%,
    rgba(129, 129, 129, 0.54) 37%,
    rgba(190, 190, 190, 0.5) 63%
  );

  background-size: 600% 600%;

  animation: ${shimmer} 1.4s ease infinite;
`

const LoadingTitle = styled.div`
  height: 14px;
  width: 100%;

  margin-bottom: 5px;

  background: linear-gradient(
    90deg,
    rgba(190, 190, 190, 0.5) 25%,
    rgba(129, 129, 129, 0.54) 37%,
    rgba(190, 190, 190, 0.5) 63%
  );

  background-size: 600% 600%;

  animation: ${shimmer} 1.4s ease infinite;
`

const LoadingAuthor = styled.div`
  align-self: flex-start;

  height: 12px;
  width: 70%;

  background: linear-gradient(
    90deg,
    rgba(190, 190, 190, 0.5) 25%,
    rgba(129, 129, 129, 0.54) 37%,
    rgba(190, 190, 190, 0.5) 63%
  );

  background-size: 600% 600%;

  animation: ${shimmer} 1.4s ease infinite;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 15px;

  width: 99px;
`

export { LoadingImage, LoadingTitle, LoadingAuthor, Wrapper }

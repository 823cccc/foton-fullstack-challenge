import styled from 'styled-components'

const Footer = styled.nav`
  z-index: 100;

  position: fixed;
  bottom: 0;

  width: 100%;
  max-height: 54px;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  padding: 9px 0px;

  background: #ffffff;

  @media (min-width: 768px) {
    width: 600px;
    margin: auto;

    left: 50%;
    transform: translateX(-50%);
  }
`

export { Footer }

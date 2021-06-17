import styled from 'styled-components'

const Footer = styled.nav`
  z-index: 100;

  position: fixed;
  bottom: 0;

  width: 100%;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  padding: 9px 0px;

  background: #ffffff;
`

export { Footer }

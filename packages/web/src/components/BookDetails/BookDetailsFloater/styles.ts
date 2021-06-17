import styled from 'styled-components'

const Floater = styled.footer`
  z-index: 100;

  position: fixed;
  display: flex;

  width: calc(100% - 40px);
  height: 56px;

  justify-content: center;
  align-items: center;

  padding: 0 20px;

  bottom: 20px;

  background: #ffffff;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
`

export { Floater }

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
  margin: 0 20px;

  bottom: 20px;

  background: #ffffff;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;

  @media (min-width: 768px) {
    max-width: auto;
    width: 600px;

    margin: 50px auto 0 auto;
    justify-content: space-evenly;

    left: 50%;
    transform: translateX(-50%);
  }
`

const Anchor = styled.a`
  text-decoration: none;
  color: #000;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`

export { Floater, Anchor }

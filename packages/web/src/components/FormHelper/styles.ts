import styled from 'styled-components'

const Anchor = styled.a`
  text-decoration: underline;
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

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`

export { Anchor, Paragraph }

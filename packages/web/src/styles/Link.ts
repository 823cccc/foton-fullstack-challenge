import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(RouterLink)`
  text-decoration: none;
  color: #000;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export { Link }

import React from 'react'

import { Paragraph } from './styles'

type Props = {
  children?: React.ReactNode
}

const Heading = ({ children }: Props): JSX.Element => (
  <Paragraph>{children}</Paragraph>
)

export { Heading }

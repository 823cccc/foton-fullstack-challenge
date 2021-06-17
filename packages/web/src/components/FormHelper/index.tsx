import React from 'react'

import { Anchor, Paragraph } from './styles'

type Props = {
  text: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const FormHelper = ({ text, onClick }: Props): JSX.Element => {
  return (
    <>
      <Anchor href="#" onClick={onClick}>
        <Paragraph>{text}</Paragraph>
      </Anchor>
    </>
  )
}

export { FormHelper }

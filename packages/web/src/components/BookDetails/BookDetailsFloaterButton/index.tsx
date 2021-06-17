import React from 'react'

import { Icon, Text, Wrapper } from './styles'

type Props = {
  icon: string
  label: string

  onClick?: unknown
}

const BookDetailsFloaterButton = ({ icon, label }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Icon className="material-icons">{icon}</Icon>
      <Text>{label}</Text>
    </Wrapper>
  )
}

export { BookDetailsFloaterButton }

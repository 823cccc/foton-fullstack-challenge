import React from 'react'

import { LoadingText, Text } from './styles'

type Props = { name?: string }

const BookDetailsName = ({ name }: Props): JSX.Element => {
  return <>{name ? <Text>{name}</Text> : <LoadingText />}</>
}

export { BookDetailsName }

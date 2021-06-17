import React from 'react'

import { LoadingText, Text } from './styles'

type Props = { description?: string }

const BookDetailsDescription = ({ description }: Props): JSX.Element => {
  return <>{description ? <Text>{description}</Text> : <LoadingText />}</>
}

export { BookDetailsDescription }

import React from 'react'

import { LoadingText, Text } from './styles'

type Props = { author?: string }

const BookDetailsAuthor = ({ author }: Props): JSX.Element => {
  return <>{author ? <Text>{author}</Text> : <LoadingText />}</>
}

export { BookDetailsAuthor }

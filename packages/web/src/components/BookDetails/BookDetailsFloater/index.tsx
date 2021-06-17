import React from 'react'

import { BookDetailsFloaterButton } from '../BookDetailsFloaterButton'
import { BookDetailsFloaterSeparator } from '../BookDetailsFloaterSeparator'
import { Floater } from './styles'

const BookDetailsFloater = (): JSX.Element => {
  return (
    <Floater>
      <BookDetailsFloaterButton icon="auto_stories" label="Read" />
      <BookDetailsFloaterSeparator />
      <BookDetailsFloaterButton icon="headphones" label="Listen" />
      <BookDetailsFloaterSeparator />
      <BookDetailsFloaterButton icon="ios_share" label="Share" />
    </Floater>
  )
}

export { BookDetailsFloater }

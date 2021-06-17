import React from 'react'
import { toast } from 'react-toastify'

import { BookDetailsFloaterButton } from '../BookDetailsFloaterButton'
import { BookDetailsFloaterSeparator } from '../BookDetailsFloaterSeparator'
import { Anchor, Floater } from './styles'

type Props = { readUrl: string }

const BookDetailsFloater = ({ readUrl }: Props): JSX.Element => {
  const share = () => {
    navigator.clipboard.writeText(location.href)
    toast.success('Link copied to clipboard!')
  }

  const read = () => window.open(readUrl, '_blank')

  return (
    <Floater>
      <Anchor onClick={read}>
        <BookDetailsFloaterButton icon="auto_stories" label="Read" />
      </Anchor>

      <BookDetailsFloaterSeparator />

      <Anchor onClick={read}>
        <BookDetailsFloaterButton icon="headphones" label="Listen" />
      </Anchor>

      <BookDetailsFloaterSeparator />
      <Anchor onClick={share}>
        <BookDetailsFloaterButton icon="ios_share" label="Share" />
      </Anchor>
    </Floater>
  )
}

export { BookDetailsFloater }

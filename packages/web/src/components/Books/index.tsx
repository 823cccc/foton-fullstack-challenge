import { Book } from '@foton-challenge/common'
import React from 'react'

import { Book as BookComponent } from '../Book'
import { Grid } from './styles'

type Props = {
  books: Book[]
}

const Books = ({ books }: Props): JSX.Element => {
  return (
    <Grid>
      {books.map((book) => (
        <BookComponent
          key={book.id}
          id={book.id}
          name={book.name}
          author={book.author}
          coverUrl={book.coverUrl}
        />
      ))}
    </Grid>
  )
}

export { Books }

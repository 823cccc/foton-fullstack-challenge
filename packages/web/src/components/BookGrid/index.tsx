import { Book } from '@foton-challenge/common'
import _ from 'lodash'
import React from 'react'

import { Book as BookComponent } from '../Book'
import { LoadingBook } from '../LoadingBook'
import { Grid } from './styles'

type Props = {
  books: Book[]
  loading?: boolean
}

const BookGrid = ({ books, loading }: Props): JSX.Element => {
  return (
    <Grid>
      {loading ? (
        <>
          {_.times(15, () => (
            <LoadingBook />
          ))}
        </>
      ) : (
        books.map((book) => (
          <BookComponent
            key={book.id}
            id={book.id}
            name={book.name}
            author={book.author}
            coverUrl={book.coverUrl}
          />
        ))
      )}
    </Grid>
  )
}

export { BookGrid }

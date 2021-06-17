import { Book } from '@foton-challenge/common'
import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'

import {
  BookDetailsAuthor,
  BookDetailsDescription,
  BookDetailsFloater,
  BookDetailsHeader,
  BookDetailsImage,
  BookDetailsName,
} from '../../components'
import { BookService } from '../../services'
import { Content } from '../../styles'

const Details = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()

  const [book, setBook] = useState<Book | undefined>(undefined)
  const [error, setError] = useState(false)

  useEffect(() => {
    BookService.getBook(id)
      .then((book) => setBook(book))
      .catch(() => setError(true))
  }, [id])

  if (error) {
    return <Redirect to="/404" />
  }

  return (
    <>
      <BookDetailsHeader />
      <Content>
        <BookDetailsImage url={book?.coverUrl} />
        <BookDetailsName name={book?.name} />
        <BookDetailsAuthor author={book?.author} />
        <BookDetailsDescription description={book?.description} />
      </Content>
      {book && <BookDetailsFloater />}
    </>
  )
}

export { Details }

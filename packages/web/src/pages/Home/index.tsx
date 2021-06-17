import { Book } from '@foton-challenge/common'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
  Books,
  Button,
  Greeting,
  NavigationBar,
  SearchBar,
} from '../../components'
import { BookService } from '../../services'
import { Content } from '../../styles'

const Home = (): JSX.Element => {
  const history = useHistory()

  const [amount, setAmount] = useState(1)
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    const take = amount * 15

    BookService.getBooks(take).then((books) => setBooks(() => books))
  }, [amount])

  const handleFocus = () => history.push('/search')

  const handleClick = () => setAmount(amount + 1)

  return (
    <>
      <Content>
        <SearchBar onFocus={handleFocus} />
        <Greeting />
        <Books books={Array.from(books)} />
        <Button label="Load more" onClick={handleClick} />
      </Content>
      <NavigationBar />
    </>
  )
}

export { Home }

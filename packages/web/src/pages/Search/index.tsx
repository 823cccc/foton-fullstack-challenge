import { Book } from '@foton-challenge/common'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { Books, Button, NavigationBar, SearchBar } from '../../components'
import { BookService } from '../../services'
import { Content } from '../../styles'

const Search = (): JSX.Element => {
  const history = useHistory()
  const { query } = useParams<{ query?: string }>()

  const [search, setSearch] = useState(query ?? '')
  const [amount, setAmount] = useState(1)

  const [books, setBooks] = useState<Book[]>([])
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>()

  useEffect(() => inputRef?.focus(), [inputRef])

  useEffect(() => {
    const take = amount * 15

    BookService.searchBooks(search, take)
      .then((books) => setBooks(() => books))
      .catch(() => setBooks(() => []))
  }, [search, amount])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value

    if (input.length < search.length) {
      setAmount(1)
    }

    history.replace('/search/' + input)
    setSearch(input)
  }

  const handleClick = () => setAmount(amount + 1)

  return (
    <>
      <Content>
        <SearchBar
          setInputRef={setInputRef}
          onChange={handleChange}
          value={search}
          searchPage
        />

        <Books books={books} />

        <Button label="Load more" onClick={handleClick} />
      </Content>
      <NavigationBar />
    </>
  )
}

export { Search }

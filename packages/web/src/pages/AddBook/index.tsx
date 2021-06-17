import React, { useContext, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import {
  FormButton,
  FormInput,
  FormTextArea,
  Heading,
  NavigationBar,
} from '../../components'
import { AuthenticationContext } from '../../contexts'
import { BookService } from '../../services'
import { Content } from '../../styles'

const AddBook = (): JSX.Element => {
  const history = useHistory()

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [coverUrl, setCoverUrl] = useState('')
  const [description, setDescription] = useState('')

  const { authenticated } = useContext(AuthenticationContext)

  if (!authenticated) {
    toast.error('You must be logged in.')
    return <Redirect to="/profile" />
  }

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value)

  const handleAuthor = (event: React.ChangeEvent<HTMLInputElement>) =>
    setAuthor(event.target.value)

  const handleCoverUrl = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCoverUrl(event.target.value)

  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(event.target.value)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    BookService.create(name, author, coverUrl, description)
      .then((book) => {
        history.push('/books/' + book.id)

        toast.success('Book added successfully!')
      })
      .catch(() => {
        setName('')
        setAuthor('')
        setCoverUrl('')
        setDescription('')

        toast.error("Couldn't add a new book.")
      })
  }

  return (
    <>
      <Content>
        <Heading>Add a new book</Heading>
        <form onSubmit={handleSubmit}>
          <FormInput label="Name" value={name} onChange={handleName} />
          <FormInput label="Author" value={author} onChange={handleAuthor} />
          <FormInput
            label="Cover URL"
            value={coverUrl}
            onChange={handleCoverUrl}
          />
          <FormTextArea
            label="Description"
            value={description}
            onChange={handleDescription}
          />
          <FormButton label="Add new book" />
        </form>
      </Content>
      <NavigationBar />
    </>
  )
}

export { AddBook }

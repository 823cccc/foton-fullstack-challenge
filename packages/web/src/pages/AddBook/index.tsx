import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Redirect, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { Form, FormButton, Heading, NavigationBar } from '../../components'
import { AuthenticationContext } from '../../contexts'
import { BookService } from '../../services'
import { Content } from '../../styles'

type FormInputs = {
  name: string
  author: string
  coverUrl: string
  description: string
}

const schema = yup.object().shape({
  name: yup.string().required(),
  author: yup.string().required(),
  coverUrl: yup.string().url().required(),
  description: yup.string().required(),
})

const AddBook = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ resolver: yupResolver(schema) })
  const history = useHistory()

  const { authenticated } = useContext(AuthenticationContext)

  if (!authenticated) {
    toast.error('You must be logged in.')
    return <Redirect to="/profile" />
  }

  const onSubmit: SubmitHandler<FormInputs> = ({
    name,
    author,
    coverUrl,
    description,
  }) => {
    BookService.create(name, author, coverUrl, description)
      .then((book) => {
        history.push('/books/' + book.id)
        toast.success('Book added successfully!')
      })
      .catch(() => {
        location.reload()
        toast.error("Couldn't add a new book.")
      })
  }

  return (
    <>
      <Content>
        <Heading>Add a new book</Heading>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input title="Name" {...register('name')} />
          <p>{errors.name?.message}</p>

          <label>Author</label>
          <input title="Author" {...register('author')} />
          <p>{errors.author?.message}</p>

          <label>Cover URL</label>
          <input title="Cover URL" {...register('coverUrl')} />
          <p>{errors.coverUrl?.message}</p>

          <label>Description</label>
          <textarea title="Description" {...register('description')} />
          <p>{errors.description?.message}</p>

          <FormButton label="Add new book" />
        </Form>
      </Content>
      <NavigationBar />
    </>
  )
}

export { AddBook }

import { Book } from '@foton-challenge/common'

import api from './ApiClient'

const create = async (
  name: string,
  author: string,
  coverUrl: string,
  description: string,
): Promise<Book> => {
  const response = await api.post<Book>('/books', {
    name,
    author,
    coverUrl,
    description,
  })

  return response.data
}

const getBook = async (id: string): Promise<Book> => {
  const response = await api.get<Book>('/books/' + id)

  return response.data
}

const getBooks = async (take = 0, skip = 0): Promise<Book[]> => {
  const response = await api.get<Book[]>('/books', {
    params: { take: take, skip: skip },
  })

  return response.data
}

const searchBooks = async (
  query: string,
  take = 0,
  skip = 0,
): Promise<Book[]> => {
  const response = await api.get<Book[]>('/books/search', {
    params: { query, take, skip },
  })

  return response.data
}

export { create, getBook, getBooks, searchBooks }

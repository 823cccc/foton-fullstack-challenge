import { Book } from '@foton-challenge/common'
import { Service } from 'typedi'
import { getRepository } from 'typeorm'

import { ApiError } from '../errors'
import { BookModel } from '../models'

@Service()
class BookFindService {
  private repository = getRepository(BookModel)

  public execute = async (id: string): Promise<Book> => {
    const book = await this.repository.findOne({ where: { id: id } })

    console.log(id)

    if (!book) {
      throw new ApiError('Book not found', 404)
    }

    return book
  }
}

export { BookFindService }

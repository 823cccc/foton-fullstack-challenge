import { Book } from '@foton-challenge/common'
import { Service } from 'typedi'
import { getRepository, Like } from 'typeorm'

import { ApiError } from '../errors'
import { BookModel } from '../models'

@Service()
class BookSearchService {
  private repository = getRepository(BookModel)

  public execute = async (query: string): Promise<Book[]> => {
    const [books, count] = await this.repository.findAndCount({
      where: [
        { name: Like('%' + query + '%') },
        { author: Like('%' + query + '%') },
      ],
    })

    if (!count) {
      throw new ApiError('Books not found', 404)
    }

    return books
  }
}

export { BookSearchService }

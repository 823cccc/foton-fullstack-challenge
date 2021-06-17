import { Book } from '@foton-challenge/common'
import { Service } from 'typedi'
import { getRepository, Like } from 'typeorm'

import { ApiError } from '../errors'
import { BookModel } from '../models'

@Service()
class BookSearchService {
  private repository = getRepository(BookModel)

  public execute = async (
    query: string,
    take = 15,
    skip = 0,
  ): Promise<Book[]> => {
    const [books, count] = await this.repository.findAndCount({
      where: [
        { name: Like('%' + query + '%') },
        { author: Like('%' + query + '%') },
      ],
      take: take,
      skip: skip,
    })

    if (!count) {
      throw new ApiError('Books not found', 404)
    }

    return books
  }
}

export { BookSearchService }

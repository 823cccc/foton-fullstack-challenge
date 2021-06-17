import { Book } from '@foton-challenge/common'
import { Service } from 'typedi'
import { getRepository } from 'typeorm'

import { BookModel } from '../models'

@Service()
class BookFindAllService {
  private repository = getRepository(BookModel)

  public execute = async (take = 15, skip = 0): Promise<Book[]> => {
    const books = await this.repository.find({
      take: take,
      skip: skip,
    })

    return books
  }
}

export { BookFindAllService }

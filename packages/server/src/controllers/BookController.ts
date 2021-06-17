import { Request, Response } from 'express'
import { Inject, Service } from 'typedi'

import {
  BookCreationService,
  BookFindAllService,
  BookFindService,
  BookSearchService,
} from '../services'

@Service()
class BookController {
  @Inject()
  private bookCreationService!: BookCreationService

  @Inject()
  private bookFindAllService!: BookFindAllService

  @Inject()
  private bookFindService!: BookFindService

  @Inject()
  private bookSearchService!: BookSearchService

  public create = async (req: Request, res: Response): Promise<Response> => {
    const book = await this.bookCreationService.execute(req.body)

    return res.status(201).json(book)
  }

  public findAll = async (req: Request, res: Response): Promise<Response> => {
    const books = await this.bookFindAllService.execute(
      Number(req.query.take) ?? 15,
      Number(req.query.skip) ?? 0,
    )

    return res.status(200).json(books)
  }

  public find = async (req: Request, res: Response): Promise<Response> => {
    const book = await this.bookFindService.execute(req.params.id as string)

    return res.status(200).json(book)
  }

  public search = async (req: Request, res: Response): Promise<Response> => {
    const book = await this.bookSearchService.execute(
      req.query.query as string,
      Number(req.query.take) ?? 15,
      Number(req.query.skip) ?? 0,
    )

    return res.status(200).json(book)
  }
}

export { BookController }

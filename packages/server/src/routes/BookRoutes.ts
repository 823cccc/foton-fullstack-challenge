import { Router } from 'express'
import Container from 'typedi'

import { BookController } from '../controllers'
import {
  AuthenticationMiddleware,
  CheckRoleMiddleware,
  SchemaValidationMiddleware,
} from '../middlewares'
import {
  BookCreationSchemaValidator,
  BookFindAllSchemaValidator,
  BookFindSchemaValidator,
  BookSearchSchemaValidator,
} from '../validators'

const router = (): Router => {
  const routes = Router()

  const controller = Container.get(BookController)

  routes.post(
    '/books',
    AuthenticationMiddleware,
    CheckRoleMiddleware('admin'),
    BookCreationSchemaValidator,
    SchemaValidationMiddleware,
    controller.create,
  )

  routes.get(
    '/books/search',
    BookSearchSchemaValidator,
    SchemaValidationMiddleware,
    controller.search,
  )

  routes.get(
    '/books/:id',
    BookFindSchemaValidator,
    SchemaValidationMiddleware,
    controller.find,
  )

  routes.get(
    '/books',
    BookFindAllSchemaValidator,
    SchemaValidationMiddleware,
    controller.findAll,
  )

  return routes
}

export default router

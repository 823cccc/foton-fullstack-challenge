import { Router } from 'express'
import Container from 'typedi'

import { UserController } from '../controllers'
import { SchemaValidationMiddleware } from '../middlewares'
import {
  UserLoginSchemaValidator,
  UserRegisterSchemaValidator,
} from '../validators'

const router = (): Router => {
  const routes = Router()

  const controller = Container.get(UserController)

  routes.post(
    '/login',
    UserLoginSchemaValidator,
    SchemaValidationMiddleware,
    controller.login,
  )

  routes.post(
    '/register',
    UserRegisterSchemaValidator,
    SchemaValidationMiddleware,
    controller.register,
  )

  return routes
}

export default router

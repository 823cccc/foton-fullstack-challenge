import { Router } from 'express'

import books from './BookRoutes'
import users from './UserRoutes'

const router = (): Router => {
  const routes = Router()

  routes.use(books())
  routes.use(users())

  return routes
}

export default router

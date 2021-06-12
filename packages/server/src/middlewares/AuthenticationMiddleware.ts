import { NextFunction, Request, Response } from 'express'
import Container from 'typedi'

import { ApiError } from '../errors'
import { TokenValidationService } from '../services'

const AuthenticationMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction,
): Promise<void> => {
  const tokenValidationService = Container.get(TokenValidationService)
  const header = req.headers.authorization

  if (!header) {
    throw new ApiError('Missing bearer token', 401)
  }

  const id = await tokenValidationService.execute(header)
  req.user = { id }

  return next()
}

export { AuthenticationMiddleware }

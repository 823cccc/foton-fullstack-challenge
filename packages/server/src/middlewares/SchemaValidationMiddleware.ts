import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

import { ApiError } from '../errors'

const SchemaValidationMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction,
): Promise<void> => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    throw new ApiError({ errors: errors.array() })
  }

  return next()
}

export { SchemaValidationMiddleware }

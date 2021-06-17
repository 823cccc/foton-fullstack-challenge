import { NextFunction, Request, Response } from 'express'
import Container from 'typedi'

import { ValidateRolesService } from '../services'

const CheckRoleMiddleware = (
  ...roles: string[]
): ((req: Request, res: Response, next: NextFunction) => Promise<void>) => {
  return async (
    req: Request,
    _res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const validateRoleService = Container.get(ValidateRolesService)

    await validateRoleService.execute(req.user.id, roles)

    return next()
  }
}

export { CheckRoleMiddleware }

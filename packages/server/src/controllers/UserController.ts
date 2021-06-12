import { Request, Response } from 'express'
import { Inject, Service } from 'typedi'

import { UserLoginService, UserRegisterService } from '../services'

@Service()
class UserController {
  @Inject()
  private userLoginService!: UserLoginService

  @Inject()
  private userRegisterService!: UserRegisterService

  public login = async (req: Request, res: Response): Promise<Response> => {
    const authenticationData = await this.userLoginService.execute(req.body)

    return res.status(200).json(authenticationData)
  }

  public register = async (req: Request, res: Response): Promise<Response> => {
    const user = await this.userRegisterService.execute(req.body)

    return res.status(201).json(user)
  }
}

export { UserController }

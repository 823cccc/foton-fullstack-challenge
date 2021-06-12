import { AuthenticationData, sanitizeUser, User } from '@foton-challenge/common'
import { Inject, Service } from 'typedi'
import { getRepository } from 'typeorm'

import { ApiError } from '../errors'
import { UserModel } from '../models'
import { PasswordValidationService } from './PasswordValidationService'
import { TokenGenerationService } from './TokenGenerationService'

@Service()
class UserLoginService {
  private repository = getRepository(UserModel)

  @Inject()
  private passwordValidationService!: PasswordValidationService

  @Inject()
  private tokenGenerationService!: TokenGenerationService

  public execute = async ({
    email,
    password,
  }: User): Promise<AuthenticationData> => {
    const user = await this.repository.findOne({ where: { email: email } })

    if (!user) {
      throw new ApiError('Incorrect email/password', 401)
    }

    this.passwordValidationService.execute(user.password, password)

    const token = await this.tokenGenerationService.execute(user.id)

    return {
      user: sanitizeUser(user),
      token: token,
    }
  }
}

export { UserLoginService }

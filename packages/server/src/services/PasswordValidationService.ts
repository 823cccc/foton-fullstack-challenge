import * as argon2 from 'argon2'
import { Service } from 'typedi'

import { ApiError } from '../errors'

@Service()
class PasswordValidationService {
  public execute = async (hash: string, password: string): Promise<void> => {
    const matches = await argon2.verify(hash, password)

    if (!matches) {
      throw new ApiError('Incorrect email/password', 401)
    }
  }
}

export { PasswordValidationService }

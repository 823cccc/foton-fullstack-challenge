import { verify } from 'jsonwebtoken'
import { Inject, Service } from 'typedi'

import { ApiError } from '../errors'

type TokenPayload = {
  sub: string
}

@Service()
class TokenValidationService {
  @Inject('JWT_SECRET')
  private secret!: string

  public execute = async (header: string): Promise<string> => {
    const [, token] = header.split(' ')

    try {
      const { sub } = verify(token, this.secret) as TokenPayload

      return sub
    } catch {
      throw new ApiError('Invalid bearer token', 401)
    }
  }
}

export { TokenValidationService }

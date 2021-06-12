import { sign } from 'jsonwebtoken'
import { Inject, Service } from 'typedi'

@Service()
class TokenGenerationService {
  @Inject('JWT_SECRET')
  private secret!: string

  public execute = async (id: string): Promise<string> => {
    return sign({}, this.secret, {
      subject: id,
      expiresIn: '1d',
    })
  }
}

export { TokenGenerationService }

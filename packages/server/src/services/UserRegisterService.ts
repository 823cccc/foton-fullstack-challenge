import { sanitizeUser, User } from '@foton-challenge/common'
import * as argon2 from 'argon2'
import { Service } from 'typedi'
import { getRepository } from 'typeorm'

import { ApiError } from '../errors'
import { UserModel } from '../models'

@Service()
class UserRegisterService {
  private repository = getRepository(UserModel)

  public execute = async ({
    name,
    email,
    password,
  }: User): Promise<Partial<User>> => {
    const exists = await this.repository.findOne({
      where: { email: email },
    })

    if (exists) {
      throw new ApiError('Email already in use')
    }

    const hash = await argon2.hash(password)
    const user = this.repository.create({ name, email, password: hash })

    return this.repository.save(user).then((user) => sanitizeUser(user))
  }
}

export { UserRegisterService }

import { Service } from 'typedi'
import { getRepository } from 'typeorm'

import { ApiError } from '../errors'
import { UserModel } from '../models'

@Service()
class ValidateRolesService {
  private repository = getRepository(UserModel)

  public execute = async (id: string, roles: string[]): Promise<void> => {
    const user = await this.repository.findOne(id)

    if (!user) {
      throw new ApiError('Insufficient permissions', 403)
    }

    const hasRole = roles
      .map((role) => role.toLowerCase())
      .includes(user.role.toLowerCase())

    if (!hasRole) {
      throw new ApiError('Insufficient permissions', 403)
    }
  }
}

export { ValidateRolesService }
